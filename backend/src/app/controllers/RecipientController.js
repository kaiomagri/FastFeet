import * as Yup from 'yup';
import { Op } from 'sequelize';

import Recipient from '../models/Recipient';

class RecipientController {
  async index(req, res) {
    const { page = 1, name } = req.query;

    const recipients = await Recipient.findAll({
      order: ['id'],
      limit: 20,
      offset: (page - 1) * 20,
      where: name
        ? {
            name: {
              [Op.iLike]: `%${name}%`,
            },
          }
        : {},
    });
    return res.json(recipients);
  }

  async store(req, res) {
    const schema = Yup.object().shape({
      name: Yup.string().required(),
      street: Yup.string().required(),
      number: Yup.string().required(),
      complement: Yup.string(),
      state: Yup.string().required(),
      city: Yup.string().required(),
      zip: Yup.string().required(),
    });

    if (!(await schema.isValid(req.body))) {
      return res.status(400).json({ error: 'Valdiation Fails' });
    }
    const recipient = await Recipient.create(req.body);
    return res.json(recipient);
  }

  async show(req, res) {
    if (!req.params.id) {
      return res.status(400).json({ error: 'Send the recipient id' });
    }

    const recipient = await Recipient.findByPk(req.params.id);

    if (!recipient) {
      return res.status(204).json();
    }

    return res.json(recipient);
  }
}

export default new RecipientController();

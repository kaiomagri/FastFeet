import * as Yup from 'yup';
import {
  startOfDay,
  endOfDay,
  parseISO,
  isWithinInterval,
  setHours,
  setMinutes,
  setSeconds,
} from 'date-fns';
import { Op } from 'sequelize';

import Deliveryman from '../models/Deliveryman';
import File from '../models/File';
import Delivery from '../models/Delivery';
import Recipient from '../models/Recipient';

class DeliverymanController {
  async index(req, res) {
    const { page = 1 } = req.query;

    const deliverymans = await Deliveryman.findAll({
      order: ['id'],
      attributes: ['id', 'name', 'email'],
      limit: 20,
      offset: (page - 1) * 20,
      include: [
        {
          model: File,
          as: 'avatar',
          attributes: ['id', 'path', 'url'],
        },
      ],
    });
    return res.json(deliverymans);
  }

  async store(req, res) {
    const schema = Yup.object().shape({
      name: Yup.string().required(),
      email: Yup.string()
        .email()
        .required(),
      avatar_id: Yup.number(),
    });

    if (!(await schema.isValid(req.body))) {
      return res.status(400).json({ error: 'Valdiation Fails' });
    }

    const deliverymanExists = await Deliveryman.findOne({
      where: {
        email: req.body.email,
      },
    });

    if (deliverymanExists) {
      return res
        .status(400)
        .json({ error: 'Deliveryman with this email already exists.' });
    }

    if (req.body.avatar_id) {
      const avatarExists = await File.findByPk(req.body.avatar_id);

      if (!avatarExists) {
        return res.status(400).json({ error: 'Avatar does not exists.' });
      }
    }

    const { id, name, email, avatar_id } = await Deliveryman.create(req.body);
    return res.json({
      id,
      name,
      email,
      avatar_id,
    });
  }

  async update(req, res) {
    const deliveryman = await Deliveryman.findByPk(req.params.id, {
      attributes: ['id', 'name', 'email'],
      include: [
        {
          model: File,
          as: 'avatar',
          attributes: ['id', 'path', 'url'],
        },
      ],
    });

    if (!deliveryman) {
      return res.status(204).json();
    }

    const schema = Yup.object().shape({
      name: Yup.string(),
      email: Yup.string().email(),
      avatar_id: Yup.number(),
    });

    if (!(await schema.isValid(req.body))) {
      return res.status(400).json({ error: 'Valdiation Fails' });
    }

    const { email, avatar_id } = req.body;

    if (email && email !== deliveryman.email) {
      const deliverymanExists = await Deliveryman.findOne({
        where: {
          email,
        },
      });

      if (deliverymanExists) {
        return res.status(400).json({ error: 'Deliveryman already exists.' });
      }
    }

    if (avatar_id) {
      const avatarExists = await File.findByPk(avatar_id);

      if (!avatarExists) {
        return res.status(400).json({ error: 'Avatar does not exists.' });
      }
    }

    await deliveryman.update(req.body);

    return res.json(deliveryman);
  }

  async delete(req, res) {
    const deliveryman = await Deliveryman.findByPk(req.params.id, {
      attributes: ['id', 'name', 'email'],
      include: [
        {
          model: File,
          as: 'avatar',
          attributes: ['id', 'path', 'url'],
        },
      ],
    });

    if (!deliveryman) {
      return res.status(400).json({ error: 'Deliveryman was not found.' });
    }

    await deliveryman.destroy();

    return res.status(204).json();
  }

  async showDeliveries(req, res) {
    const deliveryman = await Deliveryman.findByPk(req.params.id);

    if (!deliveryman) {
      return res.status(400).json({ error: 'Deliveryman was not found.' });
    }

    const { status } = req.query;

    const query = {
      deliveryman_id: deliveryman.id,
      end_date: null,
      canceled_at: null,
    };

    if (status && status === 'done') {
      query.end_date = {
        [Op.ne]: null,
      };
    }

    const deliveries = await Delivery.findAll({
      where: query,
    });

    return res.json(deliveries);
  }

  async updateDeliveryStatus(req, res) {
    const { id, deliveryId } = req.params;

    const deliveryman = await Deliveryman.findByPk(id);

    if (!deliveryman) {
      return res.status(400).json({ error: 'Deliveryman was not found.' });
    }

    const delivery = await Delivery.findByPk(deliveryId, {
      attributes: ['id', 'product', 'start_date', 'end_date', 'canceled_at'],
      include: [
        {
          model: Recipient,
          as: 'recipient',
          attributes: [
            'id',
            'name',
            'street',
            'number',
            'complement',
            'state',
            'city',
            'zip',
          ],
        },
        {
          model: Deliveryman,
          as: 'deliveryman',
          attributes: ['id', 'name', 'email'],
        },
        {
          model: File,
          as: 'signature',
          attributes: ['id', 'path', 'url'],
        },
      ],
    });

    if (!delivery) {
      return res.status(400).json({ error: 'Delivery was not found.' });
    }

    if (deliveryman.id !== delivery.deliveryman.id) {
      return res.status(403).json({
        error: 'You cannot update a delivery that you are not the deliveryman',
      });
    }

    const schema = Yup.object().shape({
      start_date: Yup.date(),
      end_date: Yup.date(),
      signature_id: Yup.number().when('end_date', (end_date, field) =>
        end_date ? field.required() : field
      ),
    });

    if (!(await schema.isValid(req.body))) {
      return res.status(400).json({ error: 'Valdiation Fails' });
    }

    const { start_date, end_date, signature_id } = req.body;

    if (signature_id) {
      const signatureExists = await File.findByPk(signature_id);

      if (!signatureExists) {
        return res
          .status(400)
          .json({ error: 'Signature File does not exists.' });
      }
    }

    if (start_date) {
      const parsedDate = parseISO(start_date);

      const { count } = await Delivery.findAndCountAll({
        where: {
          deliveryman_id: deliveryman.id,
          canceled_at: null,
          start_date: {
            [Op.between]: [startOfDay(parsedDate), endOfDay(parsedDate)],
          },
        },
      });

      if (count > 4) {
        return res.status(400).json({
          error: 'The max started Delivery Orders to delivery are 5 per day.',
        });
      }

      const checkDate = isWithinInterval(parsedDate, {
        start: setSeconds(setMinutes(setHours(parsedDate, 8), 0), 0),
        end: setSeconds(setMinutes(setHours(parsedDate, 18), 0), 0),
      });

      if (!checkDate) {
        return res.json({
          error: 'The start_date need to within at 08:00:00 and 18:00:00',
        });
      }
    }

    if (end_date) {
      if (!delivery.start_date) {
        return res.json({
          error: 'Only started deliveries can be finished',
        });
      }
    }

    await delivery.update(req.body);

    return res.json(delivery);
  }
}

export default new DeliverymanController();

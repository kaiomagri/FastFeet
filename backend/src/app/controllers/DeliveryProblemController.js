import * as Yup from 'yup';

import DeliveryProblem from '../models/DeliveryProblem';
import Delivery from '../models/Delivery';
import Deliveryman from '../models/Deliveryman';

import DeliveryCancelMail from '../jobs/DeliveryCancelMail';
import Queue from '../../lib/Queue';

class DeliveryProblemController {
  async index(req, res) {
    const { page = 1 } = req.query;

    const problems = await DeliveryProblem.findAll({
      order: ['id'],
      attributes: ['id', 'description', 'created_at'],
      limit: 20,
      offset: (page - 1) * 20,
      include: [
        {
          model: Delivery,
          as: 'delivery',
        },
      ],
    });

    if (!problems.length) {
      return res.status(204).json(problems);
    }
    return res.json(problems);
  }

  async show(req, res) {
    const { page = 1 } = req.query;

    const problems = await DeliveryProblem.findAll({
      where: {
        delivery_id: req.params.id,
      },
      order: ['id'],
      attributes: ['id', 'description', 'created_at'],
      limit: 20,
      offset: (page - 1) * 20,
      include: [
        {
          model: Delivery,
          as: 'delivery',
        },
      ],
    });

    if (!problems.length) {
      return res.status(204).json(problems);
    }
    return res.json(problems);
  }

  async store(req, res) {
    const schema = Yup.object().shape({
      description: Yup.string().required(),
    });

    if (!(await schema.isValid(req.body))) {
      return res.status(400).json({ error: 'Valdiation Fails' });
    }

    const { id, deliveryId } = req.params;

    const deliverymanExists = await Deliveryman.findByPk(id);

    if (!deliverymanExists) {
      return res
        .status(400)
        .json({ error: 'Deliveryman with this id was not founded.' });
    }

    const deliveryExists = await Delivery.findByPk(deliveryId);

    if (!deliveryExists) {
      return res
        .status(400)
        .json({ error: 'Delivery with this id was not founded.' });
    }

    const problem = await DeliveryProblem.create({
      delivery_id: deliveryId,
      description: req.body.description,
    });
    return res.json(problem);
  }

  async delete(req, res) {
    const problemExists = await DeliveryProblem.findByPk(req.params.id);

    if (!problemExists) {
      return res.status(400).json({ error: 'Delivery Problem was not found.' });
    }

    const delivery = await Delivery.findByPk(problemExists.delivery_id, {
      include: [
        {
          model: Deliveryman,
          as: 'deliveryman',
          attributes: ['name', 'email'],
        },
      ],
    });

    await delivery.update({ canceled_at: new Date() });

    await Queue.add(DeliveryCancelMail.key, {
      name: delivery.deliveryman.name,
      email: delivery.deliveryman.email,
      id: delivery.id,
      cancel_date: delivery.canceled_at,
    });

    return res.status(204).json();
  }
}

export default new DeliveryProblemController();

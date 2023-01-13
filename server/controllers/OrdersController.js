import {Order} from '../models/models.js';

class OrdersController {
  async getOrders(req, res, next) {
    try {
      const {id} = req.user;

      const orders = Order.findAll({
        where: {
          workerId: id,
        },
      });

      res.status(201).json(orders);

    } catch (e) {
      console.log(e);
      res.status(500).json({message: 'Не вдалось зареєструватись'});
    }
  }

  async createOrder(req, res, next) {
    try {
      const {id} = req.user;
      const {workerId, date} = req.body;

      await Order.create({
        clientId: id,
        workerId,
        date,
      });

      res.status(201).
          json(
              {message: 'Успіх! Не виключайте свій телефон, щоб наш менеджер міг зв\'язатись з вами!'});

    } catch (e) {
      console.log(e);
      res.status(500).json({message: 'Не вдалось записатись'});
    }
  }
}

export default new OrdersController();

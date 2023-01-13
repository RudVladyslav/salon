import jwt from 'jsonwebtoken';
import bcrypt from 'bcrypt';
import {User} from '../models/models.js';

class AdminController {
  async getAllWorkers(req, res, next) {
    try {
      const workers = await User.findAll({
        where: {role: 'WORKER'},
      });
      res.status(201).json(workers);

    } catch (e) {
      console.log(e);
      res.status(500).json({message: 'Не вдалось зареєструвати працівника'});
    }
  }

  async createWorker(req, res, next) {
    try {
      const {login, password, firstName, lastName, email, phone} = req.body;

      if (!login || !password) {
        res.status(403).json({message: 'Некоректний email або пароль'});
      }

      const candidate = await User.findOne({where: {login}});
      if (candidate) {
        res.status(403).json({message: 'Такий працівник вже існує'});
      }

      const hashPassword = await bcrypt.hash(password, 7);

      await User.create({
        login,
        password: hashPassword,
        firstName,
        lastName,
        email,
        phone,
        role: 'WORKER',
      });

      res.status(201).json({message: 'Рєстрація працівника успішна!'});

    } catch (e) {
      console.log(e);
      res.status(500).json({message: 'Не вдалось зареєструвати працівника'});
    }
  }

  async updateWorker(req, res, next) {
    try {
      // const {id} = req.user;
      //
      // const user = await User.findOne({
      //   where: {id: id}
      // });
      //
      // user
      //
      // await User.create({
      //   login,
      //   password: hashPassword,
      //   firstName,
      //   lastName,
      //   email,
      //   phone,
      //   role: 'WORKER',
      // });

      res.status(201).json({message: 'Рєстрація працівника успішна!'});

    } catch (e) {
      console.log(e);
      res.status(500).json({message: 'Не вдалось зареєструвати працівника'});
    }
  }

  async deleteOneDelete(req, res, next) {
    try {
      const workerId = req.params.id;
      const worker = await User.findOne({id: workerId});
      await worker.destroy();
      res.status(201).json({message: 'Працівника видалено!'});
    } catch (e) {
      console.log(e);
      res.status(500).json({message: 'Не вдалось видалити працівника'});
    }
  }
}

export default new AdminController();

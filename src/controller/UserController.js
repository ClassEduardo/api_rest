import { Sequelize } from 'sequelize';
import User from '../models/User';

class UserController {
  async create(req, res) {
    try {
      const novoUser = await User.create(req.body);
      res.json(novoUser);
    } catch (e) {
      res.status(400).json({
        erross: e.errors.map((err) => err.message),
      });
    }
  }

  async index(req, res) {
    // Econtrar os ids maiores que 0
    const { gt } = Sequelize.Op;
    try {
      const users = await User.findAll({
        where: {
          id: {
            [gt]: 0,
          },
        },
      });
      console.log('USER ID', req.userId);
      console.log('USER EMAIL', req.userEmail);
      return res.json(users);
    } catch (e) {
      return res.json(null);
    }
  }

  async show(req, res) {
    try {
      const user = await User.findOne({ id: req.params.id });
      return res.json(user);
    } catch (e) {
      return res.json(null);
    }
  }

  async update(req, res) {
    try {
      if (!req.params.id) {
        return res.status(400).json({
          errors: ['ID não enviado'],
        });
      }

      const user = await User.findByPk(req.params.id);

      if (!user) {
        return res.status(400).json({
          errors: ['Usuário não existe'],
        });
      }

      const newDataUser = await user.update(req.body);

      return res.json(newDataUser);
    } catch (e) {
      return res.status(400).json({
        erross: e.errors.map((err) => err.message),
      });
    }
  }

  async delete(req, res) {
    try {
      if (!req.params.id) {
        return res.status(400).json({
          errors: ['ID não enviado'],
        });
      }

      const user = await User.findByPk(req.params.id);

      if (!user) {
        return res.status(400).json({
          errors: ['Usuário não existe'],
        });
      }

      await user.destroy();

      return res.json(user);
    } catch (e) {
      return res.status(400).json({
        erross: e.errors.map((err) => err.message),
      });
    }
  }
}

export default new UserController();

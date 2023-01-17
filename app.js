import dotenv from 'dotenv';
import './src/database';

dotenv.config();

import express from 'express';
import homeRouter from './src/routes/homeRoutes';
import userRouter from './src/routes/userRoutes';

class App {
  constructor() {
    this.app = express();
    this.middlewares();
    this.routes();
  }

  middlewares() {
    this.app.use(express.urlencoded({ extended: true }));
    this.app.use(express.json());
  }

  routes() {
    this.app.use('/', homeRouter);
    this.app.use('/users/', userRouter);
  }
}

export default new App().app;

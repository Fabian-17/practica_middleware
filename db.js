import { Sequelize } from 'sequelize';

export const sequelize = new Sequelize('practica_middleware', 'root', '', {
  host: 'localhost',
  dialect: 'mysql'
});
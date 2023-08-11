import { DataTypes } from 'sequelize';
import { sequelize } from '../../db.js';

export const Usuario = sequelize.define('User', {
  email: {
    type: DataTypes.STRING,
    allowNull: false
  },
  nombre: {
    type: DataTypes.STRING,
    allowNull: false
  },
  apellido: {
    type: DataTypes.STRING,
    allowNull: false
  },
  dni: {
    type: DataTypes.INTEGER,
    allowNull: false
  },
  contraseña: {
    type: DataTypes.STRING
  }
}, {
  timestamps: true
});
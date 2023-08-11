import { checkSchema } from 'express-validator';

export const crearusuario = checkSchema({
  email: {
    errorMessage: 'Invalid email',
    isEmail: true
  },
  contraseña: {
    isLength: {
      options: { min: 8 },
      errorMessage: 'contraseña should be at least 8 chars'
    }
  }
});
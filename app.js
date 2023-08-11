import express from 'express';
import morgan from 'morgan';
// import { userRouter } from './routes/user.routes.js';
import { sequelize } from './db.js';
import { body, validationResult } from 'express-validator';

const app = express();

app.use(express.json());
app.use(morgan('dev'));

app.post('/',
  body('email').notEmpty().isEmail(),
  body('password').notEmpty(),
  (req, res) => {
    const errors = validationResult(req);

    if (errors.isEmpty()) {
      return res.json(req.body);
    }
    console.log(req.body);
    res.status(400).json(errors.array());
  });

// app.use('/api/users', userRouter);

const port = 4000

app.listen(port, async () => {
  try {
    await sequelize.authenticate();
    console.log('Coexion exitosa a la base de datos.');
    console.log(`Server on port ${port}`);
  } catch (error) {
    console.error('Algo falló en la conexion a la base de datos', error);
  }
});
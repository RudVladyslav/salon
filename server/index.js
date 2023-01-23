import dotenv from 'dotenv';
import express from 'express';
import cors from 'cors';
import sequelize from './db.js';
import router from './routes/index.js';
import models, {User} from './models/models.js';
import bcrypt from 'bcrypt';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());
app.use('/api', router);

const createAdmin = async () => {
  const isBeenAdmin = await User.findOne({where: {role: 'ADMIN'}})
  console.log(isBeenAdmin);
  if (!isBeenAdmin) {
    const password = await bcrypt.hash('12345', 7);
    await User.create({
      role: 'ADMIN',
      login: 'admin',
      password,
      firstName: 'admin',
      lastName: 'admin',
      email: 'admin@gmail.com',
      phone: 98234823,
    });
  }
};

const start = async () => {
  try {
    await sequelize.authenticate();
    await sequelize.sync();
    await createAdmin()

    app.listen(PORT, () => console.log(
        `Server has been started on port:${PORT} \n http://localhost:${PORT}/ `));
  } catch (e) {
    console.log(e);
  }
};

start();

import dotenv from 'dotenv';
import express from 'express';
import cors from 'cors';
dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

const start = async () => {
  try {
    app.listen(PORT, '192.168.0.102', () => console.log(
        `Server has been started on port:${PORT} \n http://localhost:${PORT}/ \n or http://192.168.0.103:7200 `));
  } catch (e) {
    console.log(e);
  }
};

start()

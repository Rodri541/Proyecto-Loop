import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import { PORT } from './config.js'
import { voting } from './voting.routes.js';
import { countries } from './countries.routes.js';

dotenv.config();

const app = express();

const corsOptions = {
  origin: '*',
  methods: ['GET', 'POST', 'PUT', 'DELETE'],
  allowedHeaders: ['Content-Type', 'Authorization'],
  credentials: true,
};

app.use(cors(corsOptions));
app.use(express.json());

app.use(voting, countries);

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});

export default app;
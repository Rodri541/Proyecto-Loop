import dotenv from 'dotenv';
dotenv.config();

export const PORT = process.env.PORT || 3001;
export const COUNTRIES_API_BASE_URL = 'https://restcountries.com/v3.1';
export const FRONTEND_URL = 'http://localhost:3000';

export const DB_CONFIG = {
  user: 'sa',
  password: 'sololetras',
  server: 'localhost',
  database: 'CountryVoteDB',
  options: {
    encrypt: process.env.DB_ENCRYPT === 'true',
    trustServerCertificate: true
  }
};
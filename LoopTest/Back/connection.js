import sql from 'mssql';
import { DB_CONFIG } from './config.js';

let pool;

export const getConnection = async () => {
  if (!pool) {
    try {
      pool = await sql.connect(DB_CONFIG);
      console.log('Conectado a SQL Server - CountryVoteDB');
    } catch (err) {
      console.error('Error conectando a SQL Server:', err);
      throw err;
    }
  }
  return pool;
};
import { getConnection } from './connection.js';
import sql from 'mssql';

export const submitVote = async (req, res) => {
  try {
    const { name, email, country } = req.body;
    const pool = await getConnection();

    const result = await pool
      .request()
      .input('name', sql.VarChar(30), name)
      .input('email', sql.VarChar(50), email)
      .input('country', sql.VarChar(30), country)
      .query('INSERT INTO Users (name, Email, Country) VALUES (@name, @email, @country); SELECT SCOPE_IDENTITY() AS Id');

    res.json({
      success: true,
      data: result.recordset[0]
    });

  } catch (error) {
    if (error.message.includes("UNIQUE")) {
      res.status(409).json({ message: "Invalid Email" });
    }
      else {
      return res.json({ message: error.message });
    }
  }
};

export const getTopCountries = async (req, res) => {
  try {
    const pool = await getConnection();
    const result = await pool
      .request()
      .query(`
        SELECT TOP 10
          Country,
          COUNT(*) as votes
        FROM Users 
        GROUP BY Country 
        ORDER BY votes DESC
      `);

    res.json(result.recordset);
  } catch (error) {
    return res.json({ message: error.message });
  }
};

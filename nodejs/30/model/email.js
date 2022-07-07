const mysql = require('mysql2/promise');
const DB_CONFIG = require('../config');

const getAllEmails = async () => {
  try {
    const connection = await mysql.createConnection(DB_CONFIG);
    const [rows] = await connection.query('SELECT * from email');
    await connection.end();
    return rows;
  } catch (err) {
    return Promise.reject(err);
  }
};

const saveEmail = async (title, description) => {
  try {
    const connection = await mysql.createConnection(DB_CONFIG);
    const [rows] = await connection.query('INSERT INTO email SET ?', {
      title,
      description,
    });
    await connection.end();
    return rows;
  } catch (err) {
    return Promise.reject(err);
  }
};

module.exports = { getAllEmails, saveEmail };

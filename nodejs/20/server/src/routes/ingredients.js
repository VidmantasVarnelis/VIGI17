const express = require('express');
const mysql = require('mysql2/promise');
const joi = require('joi');
const DB_CONFIG = require('../config');

const router = express.Router();

const ingredientsSchema = joi.object({
  name: joi.string().alphanum().required(),
  type: joi.string().alphanum().required(),
});

router.get('/', async (req, res) => {
  try {
    const connection = await mysql.createConnection(DB_CONFIG);
    const [rows] = await connection.query('SELECT * FROM ingredients');
    await connection.end();
    res.json(rows);
  } catch (err) {
    res.status(500).json(err);
  }
});
router.post('/', async (req, res) => {
  try {
    const { name, type } = req.body;
    try {
      await ingredientsSchema.validateAsync({ name, type });
    } catch (err) {
      return res.status(400).json(err);
    }
    const connection = await mysql.createConnection(DB_CONFIG);
    const [rows] = await connection.query('INSERT INTO ingredients SET ?', {
      name,
      type,
    });
    await connection.end();
    return res.json(rows);
  } catch (err) {
    return res.status(500).json(err);
  }
});

module.exports = router;

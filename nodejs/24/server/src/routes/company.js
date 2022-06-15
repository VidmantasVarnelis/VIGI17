const express = require('express');
const mysql = require('mysql2/promise');
const joi = require('joi');
const isLoggedIn = require('../middleware/authorization');
const DB_CONFIG = require('../config');

const router = express.Router();

const companySchema = joi.object({
  name: joi.string().alphanum().required(),
  size: joi.number().required(),
  address: joi.string().alphanum().required(),
  field: joi.string().alphanum().required(),
  description: joi.string().alphanum().required(),
  img_url: joi.string().required(),
  year: joi.date().required(),
});

router.get('/', isLoggedIn, async (req, res) => {
  try {
    const con = await mysql.createConnection(DB_CONFIG);
    const [rows] = await con.query('SELECT * from company');
    return res.json(rows);
  } catch (err) {
    return res.status(500).json(err);
  }
});

router.post('/', isLoggedIn, async (req, res) => {
  try {
    const inputBody = req.body;
    try {
      await companySchema.validateAsync(inputBody);
    } catch (err) {
      return res.json(400).json(err);
    }
    const con = await mysql.createConnection(DB_CONFIG);
    const [rows] = await con.query('INSERT INTO company SET ?', inputBody);
    return res.json(rows);
  } catch (err) {
    return res.status(500).json(err);
  }
});

module.exports = router;

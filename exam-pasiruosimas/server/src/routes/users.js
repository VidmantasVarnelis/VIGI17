const express = require('express');
const Joi = require('joi');
const mysql = require('mysql2/promise');
const bcrypt = require('bcrypt');
const DB_CONFIG = require('../../config');

const router = express.Router();

const updateSchema = Joi.object({
  name: Joi.string(),
  email: Joi.string().email({
    minDomainSegments: 2,
    tlds: { allow: ['com', 'net'] },
  }),
  password: Joi.string(),
});

router.get('/users', async (req, res) => {
  try {
    const con = await mysql.createConnection(DB_CONFIG);
    const [rows] = await con.query(
      'SELECT id, name, email from papildomos_users',
    );
    await con.end();
    return res.json(rows);
  } catch (err) {
    return res.status(500).json({
      status: 500,
      err,
    });
  }
});

router.get('/user/:id', async (req, res) => {
  const { id } = req.params;
  try {
    const con = await mysql.createConnection(DB_CONFIG);
    const [[rows]] = await con.query(
      `SELECT id, name, email from papildomos_users WHERE id=${Number(id)}`,
    );
    await con.end();
    return res.json(rows || {});
  } catch (err) {
    return res.status(500).json({
      status: 500,
      err,
    });
  }
});

router.delete('/user/:id', async (req, res) => {
  const { id } = req.params;
  try {
    const con = await mysql.createConnection(DB_CONFIG);
    const [resp] = await con.query(
      `DELETE FROM papildomos_users WHERE id="${Number(id)}"`,
    );
    await con.end();
    return res.json(resp);
  } catch (err) {
    return res.status(500).json({
      status: 500,
      err,
    });
  }
});

router.patch('/user/:id', async (req, res) => {
  const { id } = req.params;
  const { name, email, password } = req.body;
  try {
    try {
      await updateSchema.validateAsync({ name, email, password });
    } catch (err) {
      return res.status(400).json({
        status: 400,
        err,
      });
    }

    const userData = {};
    if (name) userData.name = name;
    if (password) userData.password = await bcrypt.hash(password, 10);
    if (email) userData.email = email;
    const con = await mysql.createConnection(DB_CONFIG);
    const [resp] = await con.query(
      `UPDATE papildomos_users SET ? WHERE id="${Number(id)}"`,
      userData,
    );
    await con.end();
    return res.json(resp);
  } catch (err) {
    return res.status(500).json({
      status: 500,
      err,
    });
  }
});

module.exports = router;

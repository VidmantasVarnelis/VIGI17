const express = require('express');
const Joi = require('joi');
const mysql = require('mysql2/promise');
const bcrypt = require('bcrypt');
const DB_CONFIG = require('../../config');

const router = express.Router();

const registerSchema = Joi.object({
  name: Joi.string().required(),
  email: Joi.string()
    .email({
      minDomainSegments: 2,
      tlds: { allow: ['com', 'net'] },
    })
    .required(),
  password: Joi.string().required(),
});

const loginSchema = Joi.object({
  email: Joi.string()
    .email({
      minDomainSegments: 2,
      tlds: { allow: ['com', 'net'] },
    })
    .required(),
  password: Joi.string().required(),
});

router.post('/register', async (req, res) => {
  const { name, email, password } = req.body;
  try {
    try {
      await registerSchema.validateAsync({ name, email, password });
    } catch (err) {
      return res.status(400).json({
        status: 400,
        err,
      });
    }
    const hashedPassword = await bcrypt.hash(password, 10);
    const con = await mysql.createConnection(DB_CONFIG);
    const [rows] = await con.query(
      `SELECT email from papildomos_users WHERE email="${email}"`,
    );
    if (rows.length > 0) {
      return res.status(400).json({ status: 400, err: 'Bad email!' });
    }
    const [resp] = await con.query('INSERT INTO papildomos_users SET ?', {
      name,
      email,
      password: hashedPassword,
    });
    await con.end();
    return res.json(resp);
  } catch (err) {
    return res.status(500).json({
      status: 500,
      err,
    });
  }
});

router.post('/login', async (req, res) => {
  const { email, password } = req.body;
  try {
    try {
      await loginSchema.validateAsync({ email, password });
    } catch (err) {
      return res.status(400).json({
        status: 400,
        err,
      });
    }
    const con = await mysql.createConnection(DB_CONFIG);
    const [[user]] = await con.query(
      `SELECT * from papildomos_users WHERE email="${email}"`,
    );
    if (!user) {
      return res.status(400).json({ status: 400, err: 'User not Found!' });
    }
    const compare = await bcrypt.compare(password, user.password);
    if (!compare) {
      return res
        .status(400)
        .json({ status: 400, err: 'User password is incorrect!' });
    }
    await con.end();
    return res.json({
      status: true,
      user: {
        id: user.id,
        name: user.name,
        email: user.email,
      },
    });
  } catch (err) {
    return res.status(500).json({
      status: 500,
      err,
    });
  }
});

module.exports = router;

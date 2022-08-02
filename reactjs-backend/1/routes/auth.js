const express = require('express');
const router = express.Router();
const bcrypt = require('bcryptjs');
const UserSchema = require('../models/User');
const jwt = require('jsonwebtoken');
const joi = require('joi');

const registerSchema = joi.object({
  username: joi.string().required(),
  password: joi.string().min(3).required(),
  email: joi.string().required(),
  name: joi.string().required(),
  lastname: joi.string().required(),
});

const loginSchema = joi.object({
  username: joi.string().required(),
  password: joi.string().min(3).required(),
});

router.post('/register', async (req, res) => {
  const { username, password: plainPassword, email, name, lastname } = req.body;

  try {
    await registerSchema.validateAsync({
      username,
      password: plainPassword,
      email,
      name,
      lastname,
    });
  } catch (err) {
    return res.json({ status: false, error: err });
  }
  try {
    const password = await bcrypt.hash(plainPassword, 10);

    const user = await UserSchema.create({
      username,
      password,
      email,
      name,
      lastname,
    });

    const token = jwt.sign({ _id: user._id, username }, process.env.JWT_SECRET);

    res
      .cookie('jwt', token, {
        httpOnly: true,
        secure: false,
      })
      .status(201)
      .json({ status: true, user });
  } catch (err) {
    res.json({ status: false, error: 'user not created!' });
  }
});

router.post('/login', async (req, res) => {
  const { username, password } = req.body;

  try {
    await loginSchema.validateAsync({
      username,
      password,
    });
  } catch (err) {
    return res.json({ status: false, error: err });
  }
  const user = await UserSchema.findOne({ username }).lean();

  if (!user) {
    return res.json({ status: false, error: 'user not found' });
  }

  if (await bcrypt.compare(password, user.password)) {
    delete user.password;
    const token = jwt.sign({ _id: user._id, username }, process.env.JWT_SECRET);

    return res
      .cookie('jwt', token, {
        httpOnly: true,
        secure: false,
      })
      .json({ status: true, user, token });
  }
});

router.get('/logout', (req, res) =>
  res.clearCookie('jwt').json({ status: true }),
);

module.exports = router;

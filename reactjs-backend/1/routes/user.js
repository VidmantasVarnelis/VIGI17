const express = require('express');
const router = express.Router();
const bcrypt = require('bcryptjs');
const UserSchema = require('../models/User');
const PostSchema = require('../models/Post');
const auth = require('../middleware/auth');

router.get('/profiles', async (req, res) => {
  try {
    const users = await UserSchema.find();
    if (req.query.search) {
      const filteredUsers = users.filter((user) =>
        user.username.includes(req.query.search),
      );
      res.json(filteredUsers);
    } else {
      res.json(users);
    }
  } catch (e) {
    res.json({ status: false, error: e });
  }
});

router.get('/users', auth, async (req, res) => {
  try {
    const users = await UserSchema.find();
    if (req.query.search) {
      const filteredUsers = users.filter((user) =>
        user.username.includes(req.query.search),
      );
      res.json(filteredUsers);
    } else {
      res.json(users);
    }
  } catch (e) {
    res.json({ status: false, error: e });
  }
});

router.delete('/user/:id', auth, async (req, res) => {
  const { id } = req.params;
  try {
    const user = await UserSchema.deleteOne({ _id: id });
    res.json(user);
  } catch (e) {
    res.json({ status: false, error: 'user is not deleted' });
  }
});

router.patch('/user/:id', auth, async (req, res) => {
  const { id } = req.params;
  const password =
    req.body.password && (await bcrypt.hash(req.body.password, 10));
  try {
    const user = await UserSchema.updateOne(
      { _id: id },
      {
        $set: {
          username: req.body.username,
          password: password,
          name: req.body.name,
          email: req.body.email,
          lastname: req.body.lastname,
        },
      },
    );
    res.json(user);
  } catch (e) {
    res.json({ status: false, error: 'user is not modified' });
  }
});

router.get('/user/posts', auth, async (req, res) => {
  try {
    const users = await PostSchema.find({ owner: req.user._id }).populate(
      'owner',
      'username email',
    );
    res.json(users);
  } catch (e) {
    res.json({ status: false });
  }
});

router.get('/me', auth, async (req, res) => {
  try {
    const users = await UserSchema.find({ _id: req.user._id });
    res.json(users);
  } catch (e) {
    res.json({ status: false });
  }
});

module.exports = router;

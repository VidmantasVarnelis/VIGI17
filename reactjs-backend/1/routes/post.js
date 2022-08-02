const express = require('express');
const router = express.Router();
const PostSchema = require('../models/Post');
const auth = require('../middleware/auth');
const joi = require('joi');

const postSchema = joi.object({
  title: joi.string().required(),
  desc: joi.string().required(),
  url: joi.string().required(),
  owner: joi.required(),
});

router.get('/posts', auth, async (req, res) => {
  try {
    const posts = await PostSchema.find().populate('owner', 'username email');
    res.json(posts);
  } catch (err) {
    res.json(err);
  }
});

// router.get('/posts', async (req, res) => {
// 	try {
// 		const posts = await PostSchema.find();
// 		res.json(posts);
// 	} catch (err) {
// 		res.json(err);
// 	}
// });

router.post('/posts', auth, async (req, res) => {
  const { title, desc, url } = req.body;
  try {
    await postSchema.validateAsync({
      title,
      desc,
      url,
      owner: req.user._id,
    });
  } catch (err) {
    return res.json({ status: false, error: err });
  }

  const post = new PostSchema({
    title,
    desc,
    url,
    owner: req.user._id,
  });
  try {
    const savePost = await post.save();
    res.status(201).json(savePost);
  } catch (err) {
    res.json(err);
  }
});

router.get('/posts/:id', auth, async (req, res) => {
  try {
    const post = await PostSchema.find({ owner: req.params.id }).populate(
      'owner',
    );
    res.status(200).json(post);
  } catch (err) {
    res.json(err);
  }
});

router.delete('/posts/:id', auth, async (req, res) => {
  try {
    const post = await PostSchema.deleteOne({ _id: req.params.id });
    res.status(200).json(post);
  } catch (err) {
    res.json(err);
  }
});

router.patch('/posts/:id', auth, async (req, res) => {
  try {
    const post = await PostSchema.updateOne(
      { _id: req.params.id },
      { $set: { title: req.body.title, desc: req.body.desc } },
    );
    res.status(200).json(post);
  } catch (err) {
    res.json(err);
  }
});

module.exports = router;

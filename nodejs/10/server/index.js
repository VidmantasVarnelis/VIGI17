const express = require('express');
require('dotenv').config();
const { MongoClient, ObjectId } = require('mongodb');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(express.json());
const PORT = process.env.PORT || 3000;
const client = new MongoClient(process.env.DB_CONNECTION);

app.get('/api/v1/posts', async (req, res) => {
  try {
    const con = await client.connect();
    const posts = await con.db('Blog').collection('posts').find().toArray();
    await con.close();
    res.json(posts);
  } catch (err) {
    res.status(500).json({
      error: err.message,
    });
  }
});

app.post('/api/v1/post', async (req, res) => {
  try {
    const { img, title, description } = req.body;
    if (!title || !description || !img) {
      return res.status(400).json({ error: 'Bad Request' });
    }
    const con = await client.connect();
    const blogPost = await con
      .db('Blog')
      .collection('posts')
      .findOne({ title });
    if (blogPost) {
      return res
        .status(400)
        .json({ error: `Blog post with title: ${title}  already exists` });
    }
    const posts = await con.db('Blog').collection('posts').insertOne({
      img,
      title,
      description,
      createdAt: new Date(),
    });
    await con.close();
    return res.json(posts);
  } catch (err) {
    return res.status(500).json({
      error: err.message,
    });
  }
});

app.delete('/api/v1/post/:id', async (req, res) => {
  try {
    const parameters = req.params;
    const con = await client.connect();
    const posts = await con
      .db('Blog')
      .collection('posts')
      .deleteOne({ _id: ObjectId(parameters.id) });
    await con.close();
    res.json(posts);
  } catch (err) {
    res.status(500).json({
      error: err.message,
    });
  }
});

app.listen(PORT, () => console.log(`Server is running on port: ${PORT}`));

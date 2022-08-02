const express = require('express');
const mongoose = require('mongoose');
const app = express();
const bodyParser = require('body-parser');
const cors = require('cors');
const userRoute = require('./routes/user');
const authRoute = require('./routes/auth');
const postRoute = require('./routes/post');
const cookieParser = require('cookie-parser');
require('dotenv').config();

const PORT = process.env.PORT || 3001;
app.use(bodyParser.json());
app.use(cookieParser());
app.use(
  cors({
    origin: true,
    credentials: true,
  }),
);

mongoose.connect(
  process.env.MONGODB_URI ||
    'mongodb+srv://admin:admin@cluster0.m3dov.mongodb.net/myFirstDatabase?retryWrites=true&w=majority',
  { useNewUrlParser: true, useUnifiedTopology: true },
  () => console.log('connected to Db'),
);

app.use('/api', authRoute);
app.use('/api', userRoute);
app.use('/api', postRoute);

app.listen(PORT, () => {
  console.log(`server started on PORT: ${PORT}`);
});

const express = require('express');
require('dotenv').config();
const cors = require('cors');
const path = require('path');
const emailRouter = require('./routes/email');

const PORT = process.env.PORT || 3000;
const app = express();
app.set('view engine', 'ejs');
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));
app.use('/', emailRouter);

app.listen(PORT, console.log(`Server is running on PORT: ${PORT}`));

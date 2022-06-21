const express = require('express');
require('dotenv').config();
const cors = require('cors');
const weatherRoute = require('./src/routes/weather');

const PORT = process.env.PORT || 3001;
const app = express();
app.use(cors());
app.use(express.json());
app.use('/api/weather', weatherRoute);

app.listen(PORT, () => console.log(`Server is running on PORT:${PORT}`));

const express = require('express');
require('dotenv').config();
const cors = require('cors');
const recipesRoute = require('./src/routes/recipes');
const ingredientsRoute = require('./src/routes/ingredients');

const PORT = process.env.PORT || 3000;
const app = express();
app.use(cors());
app.use(express.json());
app.use('/api/recipes', recipesRoute);
app.use('/api/ingredients', ingredientsRoute);

app.listen(PORT, () => console.log(`Server is running on PORT: ${PORT}`));

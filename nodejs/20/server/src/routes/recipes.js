const express = require('express');
const mysql = require('mysql2/promise');
const joi = require('joi');
const DB_CONFIG = require('../config');

const router = express.Router();

const recipesSchema = joi.object({
  title: joi.string().alphanum().required(),
  description: joi.string().required(),
  url: joi.string().required(),
  cook: joi.number().required(),
  prep: joi.number().required(),
  instructionDesc: joi.string().alphanum(),
  ingredients: joi.array().items(joi.number()).required(),
});

router.get('/', async (req, res) => {
  try {
    const connection = await mysql.createConnection(DB_CONFIG);
    const [rows] = await connection.query(
      'SELECT * FROM recipes JOIN instructions ON instructions.recipes_id=recipes.id',
    );
    await connection.end();
    res.json(rows);
  } catch (err) {
    res.status(500).json(err);
  }
});

router.post('/', async (req, res) => {
  try {
    const {
      title,
      description,
      url,
      cook,
      prep,
      instructionDesc,
      ingredients,
    } = req.body;

    try {
      await recipesSchema.validateAsync({
        title,
        description,
        url,
        cook,
        prep,
        instructionDesc,
        ingredients,
      });
    } catch (err) {
      return res.status(400).json(err);
    }
    const connection = await mysql.createConnection(DB_CONFIG);
    const recipeData = {
      title,
      description,
      url,
    };
    const [recipeRows] = await connection.query(
      'INSERT INTO recipes SET ?',
      recipeData,
    );
    const instructionData = {
      recipes_id: recipeRows.insertId,
      cook,
      prep,
      instructionDesc,
    };
    await connection.query('INSERT INTO instructions SET ?', instructionData);
    await connection.query(
      'INSERT INTO recipes_has_ingredients (recipes_id,ingredients_id, amount) VALUES ?',
      [ingredients.map((item) => [recipeRows.insertId, item, 'g'])],
    );
    await connection.end();
    return res.json({
      status: 'Data inserted',
    });
  } catch (err) {
    return res.status(500).json(err);
  }
});
module.exports = router;

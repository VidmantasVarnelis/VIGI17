const express = require('express');
// const fetch = require('node-fetch');
// import express from 'express';
// import fetch from 'node-fetch';
const axios = require('axios');
const mysql = require('mysql2/promise');
const DB_CONFIG = require('../config');

const router = express.Router();

router.put('/', async (req, res) => {
  try {
    const { city } = req.query;
    // const response = await fetch(
    //   `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${process.env.API_APP_KEY}`,
    // );
    // const weatherData = await response.json();
    const response = await axios.get(
      `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${process.env.API_APP_KEY}`,
    );
    const weatherData = response.data;
    const connection = await mysql.createConnection(DB_CONFIG);
    await connection.query('INSERT INTO weather SET ?', {
      temp: weatherData.main.temp - 272,
      feels_like: weatherData.main.feels_like - 272,
      city: weatherData.name,
    });
    const [data] = await connection.query(
      `SELECT * from weather WHERE city="${city}" ORDER BY created_at DESC LIMIT 3`,
    );
    res.json(data);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;

import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';
import connection from './db.js';

// const express = require('express');
// const cors = require('cors');
// const connection = require('./db');
const app = express();

app.use(cors()); // This will enable CORS for all routes

app.use(bodyParser.json());


app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*'); 
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept, Authorization');
  if (req.method === 'OPTIONS') {
    res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, PATCH, DELETE');
    return res.status(200).json({});
  }
  next();
});


async function fetchData(sql, params) {
  try {
    const [results] = await connection.query(sql, params);
    console.log(results);
    return results;
  } catch (error) {
    console.error('Error:', error);
  }
}


// POST Request Login Interface
app.post('/auth/adminlogin', async(req, res) => {
  const { email, password } = req.body;
  // Used for example, in practice you should move the login logic and validation here
  console.log(`Email: ${email}, Password: ${password}`);

  try {
    const result = await fetchData('SELECT * FROM users WHERE email = ? AND password = ? AND isAdmin = 1', 
    [email, password]);
    if (result.length > 0) {
        res.status(200).json({ message: 'Successfully Log In' });
      } else {
        res.status(401).json({ message: 'Authentication failed with an incorrect username or password.' });
      }
  } catch (error) {
    console.error('Error:', error);
  }
});

app.listen(3000, () => {
    console.log('Server is running on port 3000');
})

// Graceful shutdown
process.on('SIGINT', () => {
  connection.end().then(() => {
    console.log('Pool was closed.');
    process.exit(0);
  });
});
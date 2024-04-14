import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';

// const express = require('express');
// const cors = require('cors');
const app = express();

app.use(cors()); // This will enable CORS for all routes

app.use(bodyParser.json());

// 处理跨域请求问题（CORS）
app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*'); // 允许任何源
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept, Authorization');
  if (req.method === 'OPTIONS') {
    res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, PATCH, DELETE');
    return res.status(200).json({});
  }
  next();
});

// POST Request Login Interface
app.post('/auth/adminlogin', (req, res) => {
  const { email, password } = req.body;
  // Used for example, in practice you should move the login logic and validation here
  console.log(`Email: ${email}, Password: ${password}`);
  
  if (email === 'colinchan233@gmail.com' && password === 'chr200049') {
    res.status(200).json({ message: 'Successfully Log In' });
  } else {
    res.status(401).json({ message: 'Authentication failed with an incorrect username or password.' });
  }
});

app.listen(3000, () => {
    console.log('Server is running on port 3000');
})
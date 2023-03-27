const express = require('express');
const app = express();

// Index route
app.get('/', (req, res) => {
  res.send('Hello, world!');
});

app.get('/budgets', (req, res) => {
  res.send('this is my budgets');
});

// Middleware?
// app.set('view engine', 'ejs')

// Show route

app.get('/budgets/:index', (req,res) => {
  res.send('budgets index');
});

// New route

app.get('/budgets/:new', (req,res) => {
  res.send('/budgets/new');
});

// Create route


// Update route


// Destroy route

app.listen(3000, () => {
  console.log('Server listening on port 3000');
});
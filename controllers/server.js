const express = require('express');
const app = express();

// Index route
app.get('/budgets', (req, res) => {
  res.json(budgets);
});

// Show route


// New route


// Create route


// Update route


// Destroy route

app.listen(3000, () => {
  console.log('Server listening on port 3000');
});
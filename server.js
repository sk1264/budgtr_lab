const express = require('express');
const app = express();
const budget =('./models/budget');

app.use(express.static('public'));
app.set('view engine', 'ejs');

// Index route
app.get('/', (req, res) => {
  res.send('Hello Adult Life');
});

app.get('/budgets', (req, res) => {
  res.render('index.ejs', {budget});
});

// Show route

app.get('/budgets/:index', (req,res) => {
  res.send('budgets index');
});

// New route

app.get('/budgets/:new', (req,res) => {
  res.send('/budgets/new');
});

// Create route
app.post('/budgets', (req, res) => {
})

// Update route


// Destroy route

app.listen(3000, () => {
  console.log('Server listening on port 3000');
});
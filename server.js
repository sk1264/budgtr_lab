const express = require('express');
const app = express();
const budget =('./models/budget');

app.use(express.static('public'));
app.set('view engine', 'ejs');
app.use(express.urlencoded({ extended:false }));

app.get('/budgets', (req, res) => {
  res.render('index.ejs', {budget});
});

// Show route
app.get('/budgets/:index', (req,res) => {
  const budgetItem = budget[req.params.index]
  res.render('show.ejs',{budgetItem});
});

// New route

app.get('/budgets/new', (req,res) => {
  res.render('new.ejs');
});

// Create route
app.post('/budgets', (req, res) => {
})


// Destroy route

app.listen(3000, () => {
  console.log('Server listening on port 3000');
});
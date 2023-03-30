const express = require('express');
const app = express();
const budget = require('./models/budget');
const bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static('public'));
app.set('view engine', 'ejs');
app.use(express.urlencoded({ extended:false }));

app.get('/budgets', (req, res) => {
  res.render('index.ejs', {budget});
});

app.get('/budgets/:index', (req,res) => {
  const budgetItem = budget[req.params.index]
  res.render('new.ejs',{budgetItem});
});

app.get('/budgets/new', (req, res) => {
  res.render('new.ejs')
})

app.post('/budgets', (req, res) => {
  budget.unshift(req.body);
  res.redirect('/budgets')
});

app.listen(3000, () => {
  console.log('Server listening on port 3000');
});
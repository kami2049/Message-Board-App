const express = require('express');
const app = express();

app.set('view engine', 'ejs');

app.get('/', function (req, res) {
  res.render('newMessage')
});

app.get('/newMessage', function (req, res) {
  res.render('newMessage')
});

app.get('/post', function (req, res) {
  res.render('post')
});

app.listen(3000, function () {
  console.log('Example app listening on port 3000!')
});
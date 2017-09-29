const express = require('express');
const app = express();

app.set('view engine', 'ejs');

const message = [
	{
		title:"hello world",
	body:"the go to intro for new developers"
	}
];

app.get('/', function (req, res) {
  res.render('newMessage')
});

app.get('/newMessage', function (req, res) {
  res.render('newMessage')
});

app.get('/post', function (req, res) {
	console.log(message);
  res.render('post', {message: message});
});

app.listen(3000, function () {
  console.log('Example app listening on port 3000!')
});
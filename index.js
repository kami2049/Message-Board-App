const express = require('express');
const bodyParser = require('body-parser');
const app = express();

app.set('view engine', 'ejs');

app.use(express.static('public'));
app.use(bodyParser.urlencoded({ extended: true}));

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
  res.render('post', {message: message});
});

app.post('/create', function(req, res) {
	message.unshift(req.body);
	console.log(message);
	res.render('post', {message: message});
});

app.listen(3000, function () {
  console.log('Example app listening on port 3000!')
});
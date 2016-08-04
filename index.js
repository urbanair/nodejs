var express = require('express');
var app = express();
var port = process.env.PORT || 5000;

/*
app.get('/', function(request, response) {
  response.send("Hello World");
});

app.listen(app.get('port'), function() {
  console.log('Node app is running on port', app.get('port'));
});
*/

var router = express.Router();

router.get('/', function(req, res) {
	res.send('home page!');
});

router.get('/about', function(req, res) {
	res.send('about page!');
});

app.use('/', router);

app.listen(port);
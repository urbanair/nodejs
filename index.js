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

// 在每一個請求被處理之前都會執行的 middleware
router.use(function(req, res, next) {

  // 輸出記錄訊息至終端機
  console.log(req.method, req.url);

  // 繼續路由處理
  next();
});

//驗證參數
router.param('name', function(req, res, next, name) {

  console.log('doing name validations on ' + name);

  req.name = name;

  next();
});


router.get('/', function(req, res) {
	res.send('home page!');
});

router.get('/hello/:name', function(req, res) {
	res.send('Hello '+req.name);
});


app.route('/login')
	.get(function(req, res) {
		res.send('this is the login form');
	})

	.post(function(req, res) {
		console.log('processing');
		res.send('processing the login form!');
	});

app.use('/', router);

app.listen(port);
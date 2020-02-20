var express = require('express');
var bodyParser = require('body-parser');
var app = express();

app.set('view engine', 'ejs');

app.use(bodyParser.urlencoded({extended: true})) // использовать боди парсер с расширенными настройками

let data = 'hi Hitler';
app.get('/', function (req, res) {
  res.render('index.ejs', {data: data});
});

app.get('/create', function (req, res) { // create page
    res.render('create.ejs', );
  });


  app.post('/create', function (req, res) {  // form POST
    console.log(req.body);
  });

app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});
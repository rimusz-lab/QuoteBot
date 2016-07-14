var express = require('express');
var app = express();
var url = require('url');
var request = require('request');

var bodyParser = require('body-parser');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.set('port', (process.env.PORT || 9001));

app.get('/', function(req, res){
  res.send('It works!');
});

app.post('/post', function(req, res){
  var temp = ["I am asleep", "perhaps I am awake", "I'm so cute!", "I'm hungry"];
  var body = {
    response_type: "in_channel",
    text: temp[Math.floor((Math.random() * 4) + 1)]
  };

  res.send(body);
});

app.listen(app.get('port'), function() {
  console.log('Node app is running on port', app.get('port'));
});

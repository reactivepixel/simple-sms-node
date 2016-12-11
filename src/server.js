var express = require('express');
var sms = require('./sms.js');
var bodyParser = require('body-parser');
var twilio = require('twilio');

var app = express();

var port = process.env.PORT || 3000;

app.get('/', function(req, res){
  res.json({server_active: true});
});

app.get('/sms/send', function(req, res){
  sms.send('+12489098089', '+12482941062', 'Sending through module!', function(err, message){
    if(err){
      console.error(err);
    } else {
      console.log('Message was sent:', message);
      res.json(message)
    }
  })
});

app.listen(port, function(){
  console.log('Server running on port', port);
});

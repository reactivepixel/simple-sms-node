var express = require('express');
var sms = require('./sms.js');
var bodyParser = require('body-parser');
var twilio = require('twilio');

var app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: true,
}));

var port = process.env.PORT || 3000;

app.get('/', function(req, res){
  res.json({server_active: true});
});

app.get('/sms/send', function(req, res){
  sms.send('+12489098089', '+12482941062', 'Reply with "1" to sign up for coupons!', function(err, message){
    if(err){
      console.error(err);
    } else {
      console.log('Message was sent:', message);
      res.json(message)
    }
  })
});

app.post('/sms/receive', function(req, res){
  console.log(req.body);
});


app.listen(port, function(){
  console.log('Server running on port', port);
});

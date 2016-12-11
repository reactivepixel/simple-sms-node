exports.send = function(to, from, body, callback){
  // Twilio Credentials
  var accountSid = 'AC78c6d76d810ec6ee7c5862a674a052b4';
  var authToken = '880136aeb0abd1c80867a3ba4e2b707a';

  //require the Twilio module and create a REST client
  var client = require('twilio')(accountSid, authToken);

  client.messages.create({
      to: to,
      from: from,
      body: body,
  }, callback);  
}

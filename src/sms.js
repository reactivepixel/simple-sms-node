exports.send = function(to, from, body, callback){
  // Twilio Credentials
  var accountSid = process.env.accountSid;
  var authToken = process.env.authToken;

  //require the Twilio module and create a REST client
  var client = require('twilio')(accountSid, authToken);

  client.messages.create({
      to: to,
      from: from,
      body: body,
  }, callback);
}

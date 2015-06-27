/**
 * Welcome to Pebble.js!
 *
 * This is where you write your app.
 */

//import statements
var UI = require('ui');

//create main app
var main = new UI.Card({
  title: 'Pebble.js',
  icon: 'images/menu_icon.png',
  subtitle: 'Hello World!',
  body: 'Press any button.'
});

//show the app
main.show();

//on click
main.on('click', 'up', function(e) {
  client.calls.create({ 
  to: "4258762036", 
  from: "+12019321119",   
  method: "GET",  
  fallbackMethod: "GET",  
  statusCallbackMethod: "GET",    
	record: "false" 
  }, function(err, call) { 
	console.log(call.sid); 
});
});

// Twilio Credentials 
var accountSid = 'ACd81a88c058941f561b0d3506916bd76f'; 
var authToken = 'd490efd31d0f629ee0fd0cf430b31607'; 
 
//require the Twilio module and create a REST client 
var client = require('twilio')(accountSid, authToken);
 


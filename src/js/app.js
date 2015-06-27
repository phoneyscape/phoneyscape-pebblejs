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

});

// Twilio Credentials
var accountSid = 'ACd81a88c058941f561b0d3506916bd76f';
var authToken = 'd490efd31d0f629ee0fd0cf430b31607';

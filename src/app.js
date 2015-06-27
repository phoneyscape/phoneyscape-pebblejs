/**
 * Welcome to Pebble.js!
 *
 * This is where you write your app.
 */

//import statements
var UI = require('ui');
var ajax = require('ajax');

//create main app
var main = new UI.Card({
  title: 'Pebble.js',
  icon: 'images/menu_icon.png',
  subtitle: 'Hello World!',
  body: 'Press any button.'
});

//show the app
main.show();

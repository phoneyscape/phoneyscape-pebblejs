var UI = require('ui');
var Vector2 = require('vector2');
var ajax = require('ajax');
var Vibe = require('ui/vibe');
var Settings = require('settings');

var main_window = new UI.Window({
  fullscreen: true,
});

var main_time = new UI.TimeText({
  position: new Vector2(0, 65),
  size: new Vector2(144, 30),
  font: 'gothic-24-bold',
  textAlign: 'center',
  text: '%I:%M'
});

var to_number = '+14258762036';
var escalation_level = 0;
var save_me = Settings.data('save_me');
if (save_me){
  if (save_me.esc) {
    console.log(save_me.esc);
  }
}
Settings.config({
  url: 'https://config.phoneyscape.com',
  },
  function(e) {
    console.log('opening configurable');

    // Reset color to red before opening the webview
    Settings.option('color', 'red');
  },
  function(e) {
    console.log('closed configurable');
  }
);

// Selection Actions
main_window.on('longpress', 'down', function(e) {
  var to_num_opt = UI.Menu({
    sections: [{
      items: [{
        title: 'Change Number?',
        subtitle: 'Back for "no"'
      }]
    }]
  });
  to_num_opt.on('click', 'select', function(e){
    to_number = '';
  });
  to_num_opt.show();
});

// Main Actions
main_window.on('click', 'up', function(e) {
  Vibe.vibrate('short');
  console.log(escalation_level);
  escalation_level += 1;
  Settings.data('save_me', {id: 1, esc: escalation_level});
  setTimeout(function(){
    escalation_level = 0;
  }, 10000);
});

// Text safety net
main_window.on('click', 'select', function(e) {
  ajax({
    url: 'https://pebbleescape-stuartpb.c9.io/call',
    method: 'POST',
    data: {
      //to: to_number,
    },
  }, function(d){
    Vibe.vibrate('short');
  }, function(error){
    Vibe.vibrate('double');
  });
});

// Call self
main_window.on('click', 'down', function(e){
  ajax({
    url: 'https://pebbleescape-stuartpb.c9.io/call',
    method: 'POST',
    data: {
      to: to_number,
    },
  }, function(d){
    Vibe.vibrate('short');
  }, function(error){
    Vibe.vibrate('double');
  });
});

main_window.add(main_time);
main_window.show();

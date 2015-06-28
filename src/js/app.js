var UI = require('ui');
var Vector2 = require('vector2');
var ajax = require('ajax');
var Vibe = require('ui/vibe');

var main_window = new UI.Window({
  fullscreen: true,
});

var main_time = new UI.TimeText({
  position: new Vector2(0, 65),
  size: new Vector2(144, 30),
  font: 'gothic-24-bold',
  textAlign: 'center',
  text: '%I:%M'
})

var to_number = '+14258762036';
var escalation_level = 0;


// Selection Actions





// Main Actions
main_window.on('click', 'up', function(e) {
  Vibe.vibrate('short');
  console.log(escalation_level);
  escalation_level += 1;
  setTimeout(function(){
    escalation_level = 0;
  }, 10000);
});

main_window.on('click', 'select', function(e) {

});

main_window.on('click', 'down', function(e){
  ajax({
    url: 'https://pebbleescape-stuartpb.c9.io/call',
    method: 'POST',
    data: {to: to_number},
  }, function(d){
    Vibe.vibrate('short');
  }, function(error){
    Vibe.vibrate('double');
  });
})

main_window.add(main_time);
main_window.show();

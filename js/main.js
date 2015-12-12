function clickMe() {
  var res = _.map([[1, 2], [3, 4]], _.first);

  $('#content').html('<p>new content is ' + res + '</p>');
}

var content;

function loadJson(fileName) {
  $.getJSON(fileName, function(json) {
    content = json;
    $('#content').html('<p>new content is ' + json + '</p>');
  });
}

function saveJson(fileName) {
  socket.emit('save file', { 'fileName': fileName, 'content': JSON.stringify(content) }); // raise an event on the server
}

var socket;

function init() {
  socket = io.connect('http://localhost');
}

init();

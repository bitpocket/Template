var io = require('socket.io').listen(80); // initiate socket.io server
var fs = require('fs');
var path = require('path');
var appDir = path.dirname(require.main.filename);

function init() {
  io.sockets.on('connection', function(socket) {
    socket.on('save file', function(e) {
      var fullPath = appDir + e.fileName;
      fs.writeFile(fullPath, e.content, function(err) {
        if (err) {
          return console.log(err);
        }
        console.log('The file ' + fullPath + ' was saved!');
      });
    });
  });

  console.log('listening...');
}

init();

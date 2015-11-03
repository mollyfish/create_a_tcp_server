var net = require('net');
var fs = require('fs');

var server = net.createServer(function(socket) {
  var writeHere = fs.createWriteStream('./molly_kent/log/call' + Date.now());
  socket.pipe(writeHere);
});

server.listen('3000', function() {
  console.log('server is up on port 3000');
});

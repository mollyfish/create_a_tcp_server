var net = require('net');
// 'socket' is for two-way data communications, which TCP does.  HTTP does not do this.

// a socket is a stream object.  on('data') and on('end') are possible
var server = net.createServer(function(socket) {
  socket.on('data', function(data) {
    // data is a buffer, so we have to call toString on it
    console.log(data.toString());
  });

  socket.on('end', function() {
    console.log('socket closed');
  });
});

server.listen('3000', function() {
  console.log('server is up on port 3000');
});

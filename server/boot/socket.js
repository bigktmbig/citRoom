module.exports = function socket_ioEx(server) {
  server.io = require('socket.io')(server.start());
  server.io.on('connection', function(socket){
    console.log('a user connected');
    socket.on('chat message', function(msg){
      console.log('message: ' + msg);
      server.io.emit('chat message', msg);
    });
    socket.on('disconnect', function(){
      console.log('user disconnected');
    });
  });
};

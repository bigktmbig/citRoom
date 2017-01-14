module.exports = function socket_ioEx(server) {
  var uuid = require('node-uuid'),
  groups = {},
  userIds = {};
  
  server.io = require('socket.io')(server.start());
  server.io.on('connection', function(socket){
    //console.log('a user connected');
    socket.on('group chat message', function(data){
      console.log('message: ' + data.msg);
      server.io.emit('group chat message', data);
    });
    socket.on('disconnect group', function(){
      //console.log('user disconnected');
    });
  });
};

var loopback = require('loopback');
var boot = require('loopback-boot');

var app = module.exports = loopback();

var http = require('http'),
uuid = require('node-uuid'),
rooms = {},
userIds = {};

app.use(loopback.token({ model: app.models.AccessToken, currentUserLiteral: 'me' }))

// start the web server
app.start = function() {
	return app.listen(function() {
		app.emit('started')
		const baseUrl = app.get('url').replace(/\/$/, '')
		console.log('Web server listening at: %s', baseUrl)
		if (app.get('loopback-component-explorer')) {
			const explorerPath = app.get('loopback-component-explorer').mountPath
			console.log('Browse your REST API at %s%s', baseUrl, explorerPath)
		}
	})
}

boot(app, __dirname, function(err) {
	if (err) throw err;
});
// // Bootstrap the application, configure models, datasources and middleware.
// // Sub-apps like REST API are mounted via boot scripts.
// boot(app, __dirname, function (err) {
//   if (err) throw err

//   // start the server if `$ node server.js
// if (require.main === module) {
//     // app.start()
//     app.io = require('socketio/node_modules/socket.io')(app.start())
//     app.io.on('connection', function (socket) {

//       var currentRoom, id;

//       socket.on('init', function (data, fn) {
//         currentRoom = (data || {}).room || uuid.v4();
//         var room = rooms[currentRoom];
//         if (!data) {
//           rooms[currentRoom] = [socket];
//           id = userIds[currentRoom] = 0;
//           fn(currentRoom, id);
//           console.log('Room created, with #', currentRoom);
//         } else {
//           if (!room) {
//             return;
//           }
//           userIds[currentRoom] += 1;
//           id = userIds[currentRoom];
//           fn(currentRoom, id);
//           room.forEach(function (s) {
//             s.emit('peer.connected', { id: id });
//           });
//           room[id] = socket;
//           console.log('Peer connected to room', currentRoom, 'with #', id);
//         }
//       });

//       socket.on('msg', function (data) {
//         var to = parseInt(data.to, 10);
//         if (rooms[currentRoom] && rooms[currentRoom][to]) {
//           console.log('Redirecting message to', to, 'by', data.by);
//           rooms[currentRoom][to].emit('msg', data);
//         } else {
//           console.warn('Invalid user');
//         }
//       });

//       socket.on('disconnect', function () {
//         if (!currentRoom || !rooms[currentRoom]) {
//           return;
//         }
//         delete rooms[currentRoom][rooms[currentRoom].indexOf(socket)];
//         rooms[currentRoom].forEach(function (socket) {
//           if (socket) {
//             socket.emit('peer.disconnected', { id: id });
//           }
//         });
//       });
//     });
//   }
// })

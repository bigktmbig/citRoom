require('events').EventEmitter.prototype._maxListeners = 100;
var path = require('path');


var app = require(path.resolve(__dirname, '../server/server'));
var ds = app.datasources.mongodb;
var models = ['AccessToken', 'ACL', 'Role', 'RoleMapping', 'Client', 'Post', 'Message',
 'Group', 'Conversation', 'ClientGroup'];
console.log('Migrating...');
ds.automigrate(models, function(err) {
    if (err) throw err;
    ds.disconnect();
    process.exit();
})

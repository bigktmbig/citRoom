var path = require('path');
var app = require(path.resolve(__dirname, '../server/server'));
var Group = app.models.Group;

Group.create([{
    name: 'Group A'
},{
    name: 'Group B'
},{
    name: 'Group C'
}
], 
function (err, user) {

});
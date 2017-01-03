var path = require('path');
var app = require(path.resolve(__dirname, '../server/server'));
var Client = app.models.Client;
var Role = app.models.Role;
var RoleMapping = app.models.RoleMapping;

//admin
Client.create({
    userId: 1,          //edit here
    username: 'big',      //edit here
    email: 'big@big.com',       //edit here
    password: 'bigbig123',      //edit here
    emailVerified: true
}, 
function (err, user) {
    Role.updateOrCreate({
        name: 'big'   //edit here
    }, {
        name: 'big'   //edit here
    }, 
    function (err, role) {
        if (err) throw err;

        console.log('Created role:', role);

        //make user an admin
        role.principals.create({
            principalType: RoleMapping.USER,
            principalId: user.id
        },function (err, principal) {
            if (err) throw err;
            console.log('Principal:', principal);
        });
    });
});

Client.create({
    userId: 1,          //edit here
    username: 'admin',      //edit here
    email: 'admin@admin.com',       //edit here
    password: '11111111',      //edit here
    emailVerified: true
}, 
function (err, user) {
    Role.updateOrCreate({
        name: 'admin'   //edit here
    }, {
        name: 'admin'   //edit here
    }, 
    function (err, role) {
        if (err) throw err;

        console.log('Created role:', role);

        //make user an admin
        role.principals.create({
            principalType: RoleMapping.USER,
            principalId: user.id
        },function (err, principal) {
            if (err) throw err;
            console.log('Principal:', principal);
        });
    });
});

//manager
Client.create({
    userId: 2,          //edit here
    username: 'manager',      //edit here
    email: 'manager@manager.com',       //edit here
    password: '11111111',      //edit here
    emailVerified: true
}, 
function (err, user) {
    Role.updateOrCreate({
        name: 'manager'   //edit here
    }, {
        name: 'manager'   //edit here
    }, 
    function (err, role) {
        if (err) throw err;

        console.log('Created role:', role);

        //make user an manager
        role.principals.create({
            principalType: RoleMapping.USER,
            principalId: user.id
        },function (err, principal) {
            if (err) throw err;
            console.log('Principal:', principal);
        });
    });

});

//member
Client.create({
    userId: 2,          //edit here
    username: 'member',      //edit here
    email: 'member@member.com',       //edit here
    password: '11111111',      //edit here
    emailVerified: true
}, 
function (err, user) {
    Role.updateOrCreate({
        name: 'member'   //edit here
    }, {
        name: 'member'   //edit here
    }, 
    function (err, role) {
        if (err) throw err;

        console.log('Created role:', role);

        //make user an member
        role.principals.create({
            principalType: RoleMapping.USER,
            principalId: user.id
        },function (err, principal) {
            if (err) throw err;
            console.log('Principal:', principal);
        });
    });

});
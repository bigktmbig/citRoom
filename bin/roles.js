var path = require('path');
var app = require(path.resolve(__dirname, '../server/server'));
var Role = app.models.Role;

//create role cco default
Role.findOne({where: {name: "big"}}, function(err, role) {
    if(!role){
        Role.create({name: 'big'}, function (err, roles){
            if (err) throw err;
            cb();
        });
    }
});

Role.findOne({where: {name: "admin"}}, function(err, role) {
    if(!role){
        Role.create({name: 'admin'}, function (err, roles){
            if (err) throw err;
            cb();
        });
    }
});

Role.findOne({where: {name: "manager"}}, function(err, role) {
    if(!role){
        Role.create({name: 'manager'}, function (err, roles){
            if (err) throw err;
            cb();
        });
    }
});

Role.findOne({where: {name: "member"}}, function(err, role) {
    if(!role){
        Role.create({name: 'member'}, function (err, roles){
            if (err) throw err;
            cb();
        });
    }
});
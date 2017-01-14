module.exports = function(Client) {
	Client.currentUser = function(cb) {
		return process.nextTick(() => cb(null, Client.getCurrentUser()));
	};

	//login
    Client.afterRemote('login', function(ctx, userlogin, next) {
        if (ctx.result.userId) {
            Client.findById(ctx.result.userId, function(err, client) {
                if (err) throw err;
                var arrRoles = ['member'];
                client.roles(function(err, roles) {
                    if (roles.length > 0) {
                        roles.map(function(item) {
                            arrRoles.push(item.name);
                        });
                    }
                    ctx.result.roles = arrRoles.filter(function(n) {
                        return n != undefined;
                    });
                    next();
                });
            });
        }else {
            next();
        }
    });
};

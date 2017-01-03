module.exports = function(Client) {
	Client.currentUser = function(cb) {
		return process.nextTick(() => cb(null, Client.getCurrentUser()));
	};
};

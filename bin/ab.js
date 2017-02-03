var q = require("q");

function B(param1, param2) {
	var deferred = q.defer();
	deferred.resolve({param1: param1, param2: param2});
	return deferred.promise;
}
//Type 1
function A(param1, param2){
	return B(param1, param2).then(function(result_of_B) {
		return result_of_B;
	});
}
//....
console.log(A('abc', '123'));
console.log(123);


// //Type 2
// function B(param1, param2) {
// 	return new Promise(function(rs, rj){
// 		rs({param1: param1, param2: param2});
// 	});
// }
// function A(param1, param2){
// 	return B(param1, param2).then(function(result_of_B) {
// 		return result_of_B;
// 	})
// }
// //....
// var rs = A('abc', '123');
// console.log(rs);

// // code 3
// function B(param1, param2) {
// 	return new Promise(function(rs, rj){
// 		rs({param1: param1, param2: param2});
// 	});
// }
// function A(param1, param2){     
// 	return new Promise(function(rs, rj){ 
// 		B(param1, param2).then(function(result_of_B) {               
// 			rs(result_of_B); 
// 		});
// 	})
// }
// //....
// A('abc', '123').then(function(result_of_A){
// 	console.log(result_of_A);
// });
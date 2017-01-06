'use strict';

/**
 * @ngdoc service
 * @name myappApp.myService
 * @description
 * # myService
 * Service in the myappApp.
 */
 angular.module('myappApp')
 .factory('appServices', function(){
    return {
        filte_role : function(response, role){
            var totalItems = 0;
            var roles = new Array();
            var result = new Array();
            var users = {
                result: '',
                totalItems: 0
            };
            for (var i = 0; i < response.length; i++) {
                //get roles
                for (var j = 0; j < response[i].roles.length; j++) {
                   roles.push(response[i].roles[j].name);
               }
                //check roles
                if(roles.indexOf(role)>-1){
                    totalItems++;
                    result.push(response[i]);
                    roles = [];
                }
            }
            users = {
                result: result,
                totalItems: totalItems
            };
            return users;
        },
    };
})
 .filter('setImage', function() {
    return function (item, size, type) {
        return 'images/user.jpg';
    };
})
 .factory('mySocket', function (socketFactory) {
  return socketFactory();
});
// .filter('setImage', function(store_S3) {
//   return function (item, size, type) {
//     return 'images/user.jpg';
    // var link_image ='';
    //     //check item exist
    //     if(item){
    //       switch (size){
    //             //size is thumb
    //             case 'thumb':
    //             link_image = "https://" + store_S3.koreplatform +".s3.amazonaws.com/thumb/"+ item;
    //             break;
    //             //size is medium
    //             case 'medium':
    //             link_image = "https://" + store_S3.koreplatform +".s3.amazonaws.com/medium/"+ item;
    //             break;
    //             case 'default':
    //             link_image = item;
    //             break;
    //         }
    //     }else{
    //       switch (type){
    //         case 'user':
    //         link_image = 'images/defaults/user.jpg';
    //         break;

    //         case 'company':
    //         link_image = 'images/defaults/company.png';
    //         break;

    //         case 'chart':
    //         link_image = 'images/Opportunity/chart.png';
    //         break;
    //     }
    // }
    // return link_image;
// };
// })

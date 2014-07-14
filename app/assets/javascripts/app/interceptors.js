angular.module('popcornApp.interceptors', [])
  .factory('UserAuthInterceptor',
     function($rootScope, $q) {
       return {
         'request': function(req) {
           console.log("making a request");
           return req;
         },
         'requestError': function(reqErr) { 
           return reqErr;
         } 
       };
     });

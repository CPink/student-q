(function(){
    'use strict';
    
    angular
        .module('studentQ')
        .factory('Auth', Auth); 
        
        
   function Auth($firebaseAuth, FirebaseUrl) {
            var ref = new Firebase(FirebaseUrl);
            var auth = $firebaseAuth(ref);

            return auth;
   }
})();
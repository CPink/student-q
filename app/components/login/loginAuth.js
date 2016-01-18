(function () {
    'use strict';

    angular
        .module('studentQ')
        .factory('loginAuth', loginAuth);


    function loginAuth($firebaseAuth, FirebaseUrl) {
        var ref = new Firebase(FirebaseUrl);
        var auth = $firebaseAuth(ref);

        return auth;
    }
})();
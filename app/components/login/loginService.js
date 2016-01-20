(function () {
    'use strict';

    angular
        .module('studentQ')
        .service('loginService', loginService);

    function loginService(FirebaseUrl, $rootScope) {
        
        //Just a reference to the firebase endpoint
        var firebaseUrl = FirebaseUrl;
         
        //Creates an object using the Firebase Constructor with our endpoint passed in
        var firebaseLogin = new Firebase(firebaseUrl);
        // NEEDS TO TAKE THE USER INPUT (USERNAME) / REDIRECT THEM TO THE QUE VIEW ADD THEM TO THE QUE WAITING LIST
         
        //login method to be called from our controller. The callback is then passed the authenticated user
        //TO DO: refactor below functions to reduce how much is duplicated
        this.login = function (user, cb) {
            firebaseLogin.authAnonymously(function (err, authData) {
                if (authData) {
                    authData.user = authData.user || {};
                    //TO DO add/create an anonymous username generator
                    authData.user.username = user.username;
                    //authData.user.username = user.email.substr(0, user.email.indexOf('@'))
                    user.timestamp = Date.now();
                    firebaseLogin.child('user').child(authData.user.name).set(authData);
                    firebaseLogin.child('questions').push(user);
                    cb(authData);
                } else {
                    console.log('something went wrong');
                    cb(authData);
                }
            });
        }
    }
})();
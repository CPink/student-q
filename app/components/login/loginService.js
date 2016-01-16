(function () {
    'use strict';

    angular
        .module('studentQ')
        .service('loginService', loginService);

    function loginService(fbConnect, $rootScope) {
        var vm = this;
         
        //Just a reference to the firebase endpoint
        var firebaseUrl = fbConnect.root;
         
        //Creates an object using the Firebase Constructor with our endpoint passed in
        var firebaseLogin = new Firebase(firebaseUrl);
        // NEEDS TO TAKE THE USER INPUT (USERNAME) / REDIRECT THEM TO THE QUE VIEW ADD THEM TO THE QUE WAITING LIST
         
        //login method to be called from our controller. The callback is then passed the authenticated user
        //TO DO: refactor below functions to reduce how much is duplicated
        vm.Login = function (user, cb) {
		firebaseLogin.authAnonymously(
			function (err, authData) {
				// var _number = 0;
				// var _name = "Anonymous" + _number;
				// var _username = function(){
				// 	_number += Math.random();
				// 	return _name;
				// }
				if (authData) {
					//TO DO add/create an anonymous username generator
					authData.username = "testing";
					authData.timestamp = Date.now();
					firebaseLogin.child('users').child(authData.uid).set(authData);
					console.log(authData.username);
					cb(authData);
				} else {
					console.log('something went wrong');
					cb(authData);
				}
			});
       }
    }
})();
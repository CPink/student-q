/* global Firebase */
(function(){
    
    'use strict';
    
    angular
        .module('studentQ')
        .controller('queController', queController);
        
        function queController($firebaseArray, FirebaseUrl){
            var vm = this;
            vm.questions = $firebaseArray(new Firebase(FirebaseUrl + '/questions'))
            console.log(vm.questions)
        }
})();
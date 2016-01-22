/* global Firebase */
(function () {

    'use strict';

    angular
        .module('studentQ')
        .controller('queController', queController);

    function queController($firebaseArray, FirebaseUrl) {
        var vm = this;
        vm.questions = $firebaseArray(new Firebase(FirebaseUrl + '/questions'))
        console.log(vm.questions)

        var imgArray = ['/assets/images/rey2.jpeg', '/assets/images/bb8.png',
            '/assets/images/rey.jpg', '/assets/images/finn.jpg']
        vm.randImg = function () {
            var img = Math.floor((Math.random() * imgArray.length)-1);
            return imgArray[img];
        }

        vm.delete = function (question) {
            vm.questions.$remove(question, function (success) {
                console.log(success)
            });
        };
    }




})();
(function () {
    'use strict';

    angular
        .module('studentQ')
        .controller('loginController', loginController);

    function loginController($scope, $state, loginService) {
        var vm = this;
        
        vm.user = {
            email: vm.email,
            question: vm.question
        }
        
        vm.login = function () {
             loginService.login(vm.user, function (authData) {
                if (authData) {
                    $state.go('queView')
                }
            });
        }
    }
})();
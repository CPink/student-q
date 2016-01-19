(function () {
    'use strict';

    angular
        .module('studentQ')
        .controller('loginController', loginController);

    function loginController($scope, $state, loginService) {
        var vm = this;

        vm.login = function () {
            loginService.login(vm.authData, function (authData) {
                if(authData){
                    $state.go('queView')
                }
            });
        }
    }
})();
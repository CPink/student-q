(function(){
    'use strict';
    
    angular
        .module('studentQ')
        .controller('loginCtlr', loginCtlr);
        
        function loginCtlr($scope, loginService, $state, $window){
             var vm = $scope;
             
              return loginService.anonymousLogin(vm.authData, function (authData) {

            vm.go('que')
            
         })
            
  }
})();
(function () {

    'use strict';

    angular
        .module('studentQ', [
            'ui.router',
            'firebase',
            'ngMaterial'
        ]) 
        
    // constant to keep from hardcoding firebaseUrl throughout site
        .constant('FirebaseUrl', 'https://studentque.firebaseio.com/')

    // routes for serving all of the views for the site
        .config(function ($urlRouterProvider, $stateProvider) {
            $stateProvider
                .state('login', {
                    url: '/',
                    controller: 'loginController',
                    controllerAs: 'loginCtrl',
                    templateUrl: '/app/components/login/loginView.html',
                    // resolve: {
                    //     requireNoAuth: function ($state, Auth) {
                    //         return Auth.$requireAuth().then(function (auth) {
                    //             $state.go('queView');
                    //         }, function (error) {
                    //             return;
                    //         });
                    //     }
                    // }
                })
                .state('queView', {
                    url: '/queView',
                    controller: 'queController',
                    controllerAs: 'queCtrl',
                    templateUrl: '/app/components/que/queView.html',
                    // resolve: {
                    //     requireNoAuth: function ($state, Auth) {
                    //         return Auth.$requireAuth().then(function (auth) {
                    //             $state.go('login');
                    //         }, function (error) {
                    //             return;
                    //         });
                    //     }
                    // }
                })
            $urlRouterProvider.otherwise('/');
        })
})();
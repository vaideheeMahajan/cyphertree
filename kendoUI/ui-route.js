(function (){

    'use strict';

    angular.module('app')
        .config(moduleConfig);
    moduleConfig.$inject = ['$stateProvider',
        '$urlRouterProvider',
    ]

    function moduleConfig($stateProvider,
        $urlRouterProvider) {

        $stateProvider

            .state('home', {
                url: '/home',
                templateUrl: '../kendoUI/new-angular-project.html'
            })

            .state('details', {
                url: '/details',
                templateUrl: '../kendoUI/row-detail-dialog/row-detail-dialog.html',
                params: {
					data: null
				},
            });

        $urlRouterProvider.otherwise('/home');
    }

})();
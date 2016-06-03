angular.module('testApp', ['ui.router']).config(function($stateProvider, $urlRouterProvider) {

$urlRouterProvider.otherwise('/home');

$stateProvider

.state('home', {
    url: '/home',
    templateUrl: './app/views/homeTmpl.html',
    controller: 'mainCtrl'
})

})

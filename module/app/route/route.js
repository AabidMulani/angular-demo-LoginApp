angular.module('app').config(function($routeProvider){
    
    $routeProvider.when('/',{
        templateUrl:'views/LoginPage.html',
        controller:'LoginController'
    });
    
        $routeProvider.when('/login',{
        templateUrl:'views/LoginPage.html',
        controller:'LoginController'
    });
    
        $routeProvider.when('/register',{
        templateUrl:'views/RegistrationPage.html',
        controller:'RegistrationController'
    });
    
});
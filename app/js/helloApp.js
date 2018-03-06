//hello App
var app = angular.module('helloApp', [ngRoute]);

app.config(function($routeProvider){
  $routeProvider
    //the timeline display
    .when('/', {
      templateUrl: 'main.html'
      controller: 'mainController'
    });
    //the login display
    .when('/login',{
      templateUrl: 'login.html',
      controller: 'authController'
    });
    //signup display
    .when('/register',{
      templateUrl: 'register.html',
      controller: 'authController'
    });
});

app.controller('mainController', function($scope){
  $scope.post = [];
  $scope.newpPost = { created_by: '', text: '', created_at: ''};

  $scope.post = function(){
    $scope.newPost.created_at = Date.now();
    $scope.posts.push($scope.newPost);
    $scope.newPost = {created_by: '', text: '', created_at: ''};
  };
});
  app.controller('authController', function($scope){
    $scope.user = {username: '', pasword: ''};
    $scope.error_message = '';

    $scope.login = function(){
      //impliment authenication
      $scope.error_message = 'login request for ' + $scope.user.username;
    };

    $scope.register = function(){
      $scope.error_message = 'registration request for ' + $scope.user.username;
    }


});

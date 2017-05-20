angular.module('learnWith').controller('LoginCtrl', ['$scope', 'AuthenticationService', 'UserModel',function($scope, AuthenticationService, UserModel){
    $scope.title = 'Login View';

    $scope.userModel = UserModel;

    $scope.onReset = function onReset(){
      console.log($scope.userModel);
      console.log('reset');
    }
    $scope.onLogin= function onLogin(){
        console.log('login');
    }
}]);

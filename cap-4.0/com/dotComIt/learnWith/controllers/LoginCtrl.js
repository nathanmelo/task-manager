angular.module('learnWith').controller('LoginCtrl',['$scope','AuthenticationService','UserModel','$location',function($scope,AuthenticationService,UserModel,$location){
    $scope.title = 'Login View';

    $scope.userModel = UserModel;

    $scope.onReset = function onReset(){

      console.log('reset');
      $scope.userModel.user.username = '';
      $scope.userModel.user.password = '';
    }
    $scope.onLogin= function onLogin(){
        console.log('login');
        var errorFound = false;
        if($scope.userModel.user.username == ''){
            $scope.usernameError = 'You Must Enter a Username'
            errorFound = true;
        } else {
            $scope.usernameError = '';
        }
        if($scope.userModel.user.password == ''){
            $scope.passwordError = 'You Must Enter a Password';
            errorFound = true;
        } else {
            $scope.passwordError = '';
        }
        if(errorFound == true){
            return;
        }
        AuthenticationService.authenticate($scope.userModel.user.username,$scope.userModel.user.password).then(onLoginSuccess,onLoginError);

      }

      var onLoginError = function onLoginError(response){
          console.log('failure');
          console.log(response);
          alert(response.data);
      }

      var onLoginSuccess = function onLoginSuccess(response){
          if(response.data.error == 1){
              alert("We could not log you in");
              return;
          }
          console.log($scope.userModel);
          $scope.userModel.user = response.data.resultObject;
          console.log($scope.userModel);
          $location.path( "/tasks" );
      }
}]);

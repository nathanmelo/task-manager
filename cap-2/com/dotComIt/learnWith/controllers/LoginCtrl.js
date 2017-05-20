angular.module('learnWith').controller('LoginCtrl', ['$scope',function($scope){
    $scope.title = 'Login View';

    $scope.onReset = function onReset(){
      $scope.title = 'Losgin View';
    }
    $scope.onLogin= function onLogin(){
        $scope.title = 'Ooops';
    }
}]);

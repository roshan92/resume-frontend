(function(){
  var app = angular.module('resumeController', []);

  app.controller('resumeController',
    function($scope, $http) {
      var url = 'http://biodata.herokuapp.com';

      $http.get(url)
        .success(function(resume){
          $scope.resume = resume;
        })
        .error(function(data){
          console.log('server side error occured');
        });
    }
  );
})();

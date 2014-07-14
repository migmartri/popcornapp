(function(){
  angular.module('popcornApp.controllers').controller('MoviesController', function($scope, MoviesService, UserService, $q) {

    $scope.$watch('chart', function(newValue, oldValue) {
      if(newValue) {
        MoviesService.movies(newValue).then(function(movies) {
            $scope.movies = movies;
        });
      }
    });

    $scope.chart = "most_popular";
  });
})();

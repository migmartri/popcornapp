(function(){
  angular.module('popcornApp.controllers').controller('MoviesController', function($scope, MoviesService) {
    this.user = {name: 'Nate'};
    MoviesService.movies().then(function(movies) {
      $scope.movies = movies; 
    })

    $scope.addFavorite = function(movie){
      movie.isFavorite = true;
    };

    $scope.removeFavorite = function(movie){
      movie.isFavorite = false;
    };

  });
})();

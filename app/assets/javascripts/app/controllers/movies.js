(function(){
  angular.module('popcornApp.controllers').controller('MoviesController', function($scope, MoviesService, UserService, $q) {

    MoviesService.movies().then(function(movies) {
        $scope.movies = movies;
    });


  });
})();

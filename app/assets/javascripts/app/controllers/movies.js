(function(){
  angular.module('popcornApp.controllers').controller('MoviesController', function($scope, MoviesService, UserService, $q) {
    this.user = {name: 'Nate'};


  $q.all([UserService.currentUser(), MoviesService.movies()]).then(function(values) {
    var user = values[0];
    var movies = values[1];

   if(user) {
     var promisedFavorites = _.map(movies, function(movie) {
        return Favorite.isFavorite(user, movie);
      });

      $q.all(promisedFavorites).then(function(favorites) {
        for(var i=0; i<movies.length; i++) {
          movies[i].isFavorite = favorites[i];
        }
        $scope.movies = movies;
      });
   }else{
     $scope.movies = movies;
   }

  });

    $scope.addFavorite = function(movie){
      console.warn(movie);
      UserService.currentUser().then(function(user) {
        Favorite.createForUserAndMovie(user, movie).then(function() {
          movie.isFavorite = true;
        });
      });
    };

    $scope.removeFavorite = function(movie){
     UserService.currentUser().then(function(user) {
        Favorite.removeFavorite(user, movie).then(function() {
          movie.isFavorite = false;
        });
      });
    };

  });
})();

angular.module('popcornApp.controllers')
.controller('ProfileController', [
  '$scope', '$routeParams', 'User',
  function($scope, $routeParams, User) {

    User.query({id: $routeParams.user_id})
      .then(function(users) {
        if(users.length > 0) {
          $scope.user = users[0];
          $scope.user.favoriteMovies().then(function(movies) {
              $scope.favoriteMovies = movies;
          });
        }
      });

  }]);

(function(){
  app = angular.module('popcornApp', ['ngRoute', 'popcornApp.controllers', 'popcornApp.services']);

  app.config(function($routeProvider, $locationProvider) {
    $routeProvider
      .when('/', 
        {
          controller: 'MoviesController',
          controllerAs: 'movies',
          templateUrl: '/templates/movies.html'
        })
      .when('/movie/:movie_id', 
        {
          controller: 'MovieController',
          templateUrl: '/templates/movie.html'
        })
      .otherwise({redirectTo: '/'});
    $locationProvider.html5Mode(true);
  });

})();

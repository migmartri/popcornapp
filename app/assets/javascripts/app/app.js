(function(){
  app = angular.module('popcornApp', ['ngRoute', 'ngCookies', 'popcornApp.controllers', 'popcornApp.services', 'popcornApp.directives', 'popcornApp.resources']);

  app.config(function($routeProvider, $locationProvider) {
    $routeProvider
      .when('/', 
        {
          controller: 'MoviesController',
          controllerAs: 'movies',
          templateUrl: '/templates/movies.html'
        })
      .when('/movie/:movie_id', 
        { controller: 'MovieController', templateUrl: '/templates/movie.html' })
      .when('/login', 
        {
          templateUrl: '/templates/login.html', 
          controller: 'LoginController'
        })
       .when('/user/:user_id', 
        {
          templateUrl: '/templates/profile.html', 
          controller: 'ProfileController'
        })
      .otherwise({redirectTo: '/'});
    $locationProvider.html5Mode(true);
  });

  app.run(function($injector) {
      window.Movie = $injector.get("Movie");
        window.Favorite = $injector.get("Favorite");
  });
})();

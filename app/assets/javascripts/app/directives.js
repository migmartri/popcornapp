direct_module = angular.module('popcornApp.directives', []);

direct_module.directive('userPanel', function() {
  return {
    templateUrl: '/templates/user_panel.html',
    controller: function($scope, UserService) {

      $scope.$on('user:set', function(evt, currentUser) {
          $scope.currentUser = currentUser;
      });

      UserService.currentUser().then(function(currentUser) {
        $scope.currentUser = currentUser;
      });

      $scope.logout = function() {
        UserService.logout()
          .then(function() {
          $scope.currentUser = null;
        });
      };

    }
  };
});

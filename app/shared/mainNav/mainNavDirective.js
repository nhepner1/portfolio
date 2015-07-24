app.directive('mainNav', ["$location", function($location){
  return {
    restrict: 'E',
    scope: {},
    templateUrl: 'app/shared/mainNav/mainNavView.html',
    link: function(scope, element, attrs) {

      path = $location.path();
      if (path) {
        angular.forEach(element.find("li"), function (li) {
          var anchor = li.querySelector("a");
          if (anchor.href.match('#' + path + '(?=\\?|$)')) {
            angular.element(li).addClass('active');
          } else {
            angular.element(li).removeClass('active');
          }
        });
      }
    }
  }
}]);
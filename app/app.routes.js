app.config(['$routeProvider',
  function($routeProvider) {
    $routeProvider.
      when('/portfolio', {
        controller: 'portfolioController',
        templateUrl: 'app/components/portfolio/portfolioView.html'
      }).
      when('/services', {
        controller: 'servicesController',
        templateUrl: 'app/components/services/servicesView.html'
      }).
      when('/resume', {
        controller: 'resumeController',
        templateUrl: 'app/components/resume/resumeView.html'
      }).
      when('/references', {
        controller: 'referencesController',
        templateUrl: 'app/components/references/referencesView.html'
      }).
      when('/skills', {
        controller: 'skillsController',
        templateUrl: 'app/components/skills/skillsView.html'
      }).
      when('/contact', {
        controller: 'contactController',
        templateUrl: 'app/components/contact/contactView.html'
      }).
      when('/profile', {
        controller: 'profileController',
        templateUrl: 'app/components/profile/profileView.html'
      }).
      when('/', {
        controller: 'homeController',
        templateUrl: 'app/components/home/homeView.html'
      }).
      otherwise({
        redirectTo: '/'
      });
  }
]);

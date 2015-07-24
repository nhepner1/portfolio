app.controller('portfolioController', ['$scope', function($scope) {
  $scope.testContent = "This is my contact page controller";

  $scope.whitehouse = {
    title: 'Whitehouse.gov',
    sites: [
      {
        label: 'Whitehouse.gov',
        url: 'https://whitehouse.gov',
        image: 'assets/img/screenshots/whitehouse_thumb.png',
        description: "Testing content"
      },
      {
        label: "We The People",
        url: 'https://petitions.whitehouse.gov',
        image: 'assets/img/screenshots/petitions_thumb.png',
        description: "petitions test"
      },
      {
        label: "We The People API",
        url: "https://petitions.whitehouse.gov/developers",
        image: 'assets/img/screenshots/we_the_people_thumb.jpg',
        description: "API Test"
      }
    ]

  }

}]);
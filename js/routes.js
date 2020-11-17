var app = angular.module("initApp", ["ngRoute"]);

app.config([
  "$routeProvider",
  function ($routeProvider) {
    
    $routeProvider.when("/", {
        title: "Index - Aulas Angular",
        templateUrl: "pages/main.htm",
        controller : "newyear"
    });

    $routeProvider.when("/sobre", {
      title: "Sobre - Aulas de Angular",
      templateUrl: "pages/sobre.htm",
    });

    $routeProvider.when("/contato", {
        title: "Contato - Aulas de Angular",
        templateUrl: "pages/contato.htm",
    });
  },
]);

app.controller("newyear", function ($scope) {
  $scope.newyear = "HAPPY NEW YEAR";
});
app.run([
  "$location",
  "$rootScope",
  
  function ($location, $rootScope) {
    $rootScope.$on("$routeChangeSuccess", function(event, current, previous) {
      $rootScope.title = current.$$route.title;
    });
  }
]);

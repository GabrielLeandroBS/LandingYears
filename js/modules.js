var app = angular.module("initApps", [])

app.controller("CtrlInit",function($scope){
    $scope.title = "Angular"
})

var app = angular.module("initApp", ["ngRoute"]);
app.config(function($routeProvider) {
    $routeProvider
    .when("/",{
        title: "Teeste"
    })
    .when("/sobre", {
        templateUrl : "sobre.htm"
    })
    .when("/contato", {
        templateUrl : "contato.htm"
    })
    
});
var application = angular.module("initApp", ["ngRoute"])

application.config([
  "$routeProvider",
   function($routeProvider){
     $routeProvider.when("/",{
        title: "Template 2021 - 1",
        templateUrl: "pages/main.htm",
        controller: "newyear"
     });

     $routeProvider.when("/year1",{
       title: "Template 2021 - 2",
       templateUrl: "pages/year1.htm",
       css: "year1.css"
     })

     $routeProvider.when("/contato",{
       title: "Temaplate 2021 - 3",
       templateUrl: "pages/contato.htm"
     })

     .otherwise({ redirectTo: '/' });
   }
])

application.controller("newyear",function ($scope) {
  $scope.newyear = "HAPPY NEW YEAR"
})

// No AngularJS o $rootScope é um objeto que permite que nós possamos armazenar todo o escopo de nossa aplicação, e em cada aplicação nós só podemos usar um e somente um $rootScope.
// O serviço $ location analisa a URL na barra de endereço do navegador (com base em window.location ) e disponibiliza a URL para seu aplicativo
/*
O $broadcast chama o evento de todo mundo que está "abaixo" dele, seriam os filhos mesmo. 
Já o $emit chama todos os eventos com aquele nome. Ele é um cara que dispara globalmente.
O $on é o listener, então ele será ativado quando for chamado por um $emit ou $broadcast

angularEvent: o objeto de evento;
current: informação sobre a rota atual;
previous: informações da rota anterior, ou undefined se for a primeira rota a ser invocada.

*/
application.run([
  "$location",
  "$rootScope",

  function ($location, $rootScope) {
    $rootScope.$on("$routeChangeSuccess",function(event,current,previous){
      $rootScope.title = current.$$route.title;
    })
  }
])

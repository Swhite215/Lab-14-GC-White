var app = angular.module("elmosMod", []);

app.controller("greetingController", function() {
  $scope.greeting = "Hi There";

  $scope.greeting = "Bye-Bye Now";
});

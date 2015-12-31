var app = angular.module("CMapp", []);
app.controller("CMcontroller",
function ($scope,$http) {
    //$scope.hello = "Hello from App"
    $http.get("/api/website")
    .success(function (response) {
        $scope.websites = response;
    });
});
var app = angular.module("CMapp", []);
app.controller("CMcontroller",

function ($scope, $http) {
    //$scope.hello = "Hello from App"

    $scope.select = function (index) {

        $scope.selectedindex = index;
        $scope.developer = $scope.developers[index];

    };
    $scope.remove = function (index) {
        $http.delete("api/website/" + index)
        .success(function (response) {
            $scope.websits = response;
        });
    };



    $http.get("/api/website")
    .success(function (response) {
        $scope.websites = response;
    });
});
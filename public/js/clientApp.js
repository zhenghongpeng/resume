var app = angular.module("DeveloperApp", []);

app.controller("DeveloperController", function ($scope,$http) {
    $scope.hello = " Angular Hello from DeveloperController";
    $http.get("/developer")
    .success(function (response) {
        $scope.developers = response;
    });

    $scope.update = function (developer) {

        //       $scope.developers[index] = developer;
        $http.put("/developer/" + $scope.selectedindex, developer)
        .success(function (response) {
            $scope.developers = response;
        });

    };
    $scope.selectedindex = null;
    $scope.select = function (index) {

        $scope.selectedindex = index;
            $scope.developer = $scope.developers[index];
        
    };
    $scope.remove = function (index) {
        $http.delete("/developer/" + index)
        .success(function (response) {
            $scope.developers = response;
        });
    };
    $scope.add = function (developer) {

        //        console.log(developers);
        $http.post("/developer",developer)
            .success(function (response) {
                $scope.developers = response;
});
    };
    
});

app.directive("criteria", function () {
    return {
        restrict: "EA",
        replace: true,
        scope: {
            selections: "="
        },
        templateUrl: "html/criteria.html",
        link: function ($scope, element, attrs) {

        },
        controller: ["$scope", "$rootScope", "$http", "$timeout", "$myService", "$location", function ($scope, $rootScope, $http, $timeout, $myService, $location) {
            
            $scope.regions = [];
            $myService.regions("dev").then(function(result){
                $scope.regions = result;
            });

            $scope.departments = [];
            $myService.departments("dev").then(function(result){
                $scope.departments = result;
            });

            _.forOwn($location.search(), function(value, key){
                $scope.selections[key] = value;
             });

            // Use this to update the URL parameters when they change
            $scope.$watch("selections", function(){
                _.forOwn($scope.selections, function(value, key){
                    $location.search(key, value);
                 });
            }, true);

        }]
    }
});
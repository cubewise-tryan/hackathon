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
        controller: ["$scope", "$rootScope", "$http", "$timeout", function ($scope, $rootScope, $http, $timeout) {

        }]
    }
});
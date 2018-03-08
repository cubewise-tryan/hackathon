app.controller('PLCtrl', ['$scope', '$rootScope', '$tm1Ui', '$myService', function($scope, $rootScope, $tm1Ui, $myService) {
	/*
    *     defaults.* are variables that are declared once and are changed in the page, otherwise known as constants in programming languages
    *     lists.* should be used to store any lists that are used with ng-repeat, i.e. tm1-ui-element-list
    *     selections.* should be used for all selections that are made by a user in the page
    *     values.* should store the result of any dbr, dbra or other values from server that you want to store to use elsewhere, i.e. in a calculation
    * 
    *     For more information: https://github.com/cubewise-code/canvas-best-practice
    */
    
    $scope.defaults = {};
    $scope.selections = {};
    $scope.lists = {};
    $scope.values = {};
	   
    // Set default title values
    $scope.selections.Year = "2012";
    $scope.selections.Currency = "Local";
    $scope.selections["Version"] = "Budget";
    $scope.selections["Region"] = "3";
    $scope.selections["Department"] = "2";

  
    // Populate the column subsets
    $scope.values["Period"] = [];
    $scope.values["Period"].push({key: "01", alias: "Jan", level: 0, index: 2, type: "N", isLeaf: 0 == 0});
    $scope.values["Period"].push({key: "02", alias: "Feb", level: 0, index: 3, type: "N", isLeaf: 0 == 0});
    $scope.values["Period"].push({key: "03", alias: "Mar", level: 0, index: 4, type: "N", isLeaf: 0 == 0});
    $scope.values["Period"].push({key: "04", alias: "Apr", level: 0, index: 5, type: "N", isLeaf: 0 == 0});
    $scope.values["Period"].push({key: "05", alias: "May", level: 0, index: 6, type: "N", isLeaf: 0 == 0});
    $scope.values["Period"].push({key: "06", alias: "Jun", level: 0, index: 7, type: "N", isLeaf: 0 == 0});
    $scope.values["Period"].push({key: "07", alias: "Jul", level: 0, index: 8, type: "N", isLeaf: 0 == 0});
    $scope.values["Period"].push({key: "08", alias: "Aug", level: 0, index: 9, type: "N", isLeaf: 0 == 0});
    $scope.values["Period"].push({key: "09", alias: "Sep", level: 0, index: 10, type: "N", isLeaf: 0 == 0});
    $scope.values["Period"].push({key: "10", alias: "Oct", level: 0, index: 11, type: "N", isLeaf: 0 == 0});
    $scope.values["Period"].push({key: "11", alias: "Nov", level: 0, index: 12, type: "N", isLeaf: 0 == 0});
    $scope.values["Period"].push({key: "12", alias: "Dec", level: 0, index: 13, type: "N", isLeaf: 0 == 0});
  
    // Populate the row subsets
    $scope.lists.rows = [];
    $myService.accounts("dev").then(function(result){
        _.each(result, function(item){
            $scope.lists.rows.push(item);
        });
    });   
  
    $scope.table = $tm1Ui.tableCreate($scope, $scope.lists.rows, {preload: false, pageSize: 9999999});	

}]);

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
    $scope.lists.Period = [];
    $myService.periods("dev").then(function(result){
        _.each(result, function(item){
            $scope.lists.Period.push(item);
        });
    });   
  
    // Populate the row subsets
    $scope.lists.rows = [];
    $myService.accounts("dev").then(function(result){
        _.each(result, function(item){
            $scope.lists.rows.push(item);
        });
    });   
  
    $scope.table = $tm1Ui.tableCreate($scope, $scope.lists.rows, {preload: false, pageSize: 9999999});	

}]);

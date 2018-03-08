app.controller('PLCtrl', ['$scope', '$rootScope', '$tm1Ui', function($scope, $rootScope, $tm1Ui) {
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
    $scope.lists.rows.push({key: "4", alias: "Net Income", level: 5, index: 47, type: "C", isLeaf: 5 == 0});
    $scope.lists.rows.push({key: "40", alias: "Operating Profit", level: 4, index: 48, type: "C", isLeaf: 4 == 0});
    $scope.lists.rows.push({key: "400", alias: "Gross Margin", level: 3, index: 49, type: "C", isLeaf: 3 == 0});
    $scope.lists.rows.push({key: "4100", alias: "Net Sales", level: 2, index: 50, type: "C", isLeaf: 2 == 0});
    $scope.lists.rows.push({key: "4110", alias: "Gross Sales", level: 1, index: 51, type: "C", isLeaf: 1 == 0});
    $scope.lists.rows.push({key: "4200", alias: "Retail", level: 0, index: 52, type: "N", isLeaf: 0 == 0});
    $scope.lists.rows.push({key: "4500", alias: "Wholesale", level: 0, index: 53, type: "N", isLeaf: 0 == 0});
    $scope.lists.rows.push({key: "4130", alias: "Returns and Adjustments", level: 0, index: 54, type: "N", isLeaf: 0 == 0});
    $scope.lists.rows.push({key: "4140", alias: "Discounts", level: 0, index: 55, type: "N", isLeaf: 0 == 0});
    $scope.lists.rows.push({key: "5000", alias: "Total Cost of Sales", level: 1, index: 56, type: "C", isLeaf: 1 == 0});
    $scope.lists.rows.push({key: "5020", alias: "Standard Cost of Sales", level: 0, index: 57, type: "N", isLeaf: 0 == 0});
    $scope.lists.rows.push({key: "5050", alias: "Variances", level: 0, index: 58, type: "N", isLeaf: 0 == 0});
    $scope.lists.rows.push({key: "60", alias: "Operating Expenses", level: 2, index: 59, type: "C", isLeaf: 2 == 0});
    $scope.lists.rows.push({key: "600", alias: "Labor Expenses", level: 1, index: 60, type: "C", isLeaf: 1 == 0});
    $scope.lists.rows.push({key: "6000", alias: "Salaries", level: 0, index: 61, type: "N", isLeaf: 0 == 0});
    $scope.lists.rows.push({key: "6020", alias: "Payroll Taxes", level: 0, index: 62, type: "N", isLeaf: 0 == 0});
    $scope.lists.rows.push({key: "6040", alias: "Employee Benefits", level: 0, index: 63, type: "N", isLeaf: 0 == 0});
    $scope.lists.rows.push({key: "6100", alias: "Commissions", level: 0, index: 64, type: "N", isLeaf: 0 == 0});
    $scope.lists.rows.push({key: "620", alias: "Travel Expenses", level: 1, index: 65, type: "C", isLeaf: 1 == 0});
    $scope.lists.rows.push({key: "6200", alias: "Travel Transportation", level: 0, index: 66, type: "N", isLeaf: 0 == 0});
    $scope.lists.rows.push({key: "6210", alias: "Travel Lodging", level: 0, index: 67, type: "N", isLeaf: 0 == 0});
    $scope.lists.rows.push({key: "6220", alias: "Meals", level: 0, index: 68, type: "N", isLeaf: 0 == 0});
    $scope.lists.rows.push({key: "6230", alias: "Entertainment", level: 0, index: 69, type: "N", isLeaf: 0 == 0});
    $scope.lists.rows.push({key: "6240", alias: "Other Travel Related", level: 0, index: 70, type: "N", isLeaf: 0 == 0});
    $scope.lists.rows.push({key: "630", alias: "Marketing", level: 1, index: 71, type: "C", isLeaf: 1 == 0});
    $scope.lists.rows.push({key: "6300", alias: "Conferences", level: 0, index: 72, type: "N", isLeaf: 0 == 0});
    $scope.lists.rows.push({key: "6310", alias: "Marketing Collateral", level: 0, index: 73, type: "N", isLeaf: 0 == 0});
    $scope.lists.rows.push({key: "6400", alias: "Office Supplies", level: 0, index: 74, type: "N", isLeaf: 0 == 0});
    $scope.lists.rows.push({key: "6500", alias: "Professional Services", level: 0, index: 75, type: "N", isLeaf: 0 == 0});
    $scope.lists.rows.push({key: "660", alias: "Telephone and Utilities", level: 1, index: 76, type: "C", isLeaf: 1 == 0});
    $scope.lists.rows.push({key: "6610", alias: "Telephone", level: 0, index: 77, type: "N", isLeaf: 0 == 0});
    $scope.lists.rows.push({key: "6620", alias: "Utilities", level: 0, index: 78, type: "N", isLeaf: 0 == 0});
    $scope.lists.rows.push({key: "6700", alias: "Other Expenses", level: 0, index: 79, type: "N", isLeaf: 0 == 0});
    $scope.lists.rows.push({key: "680", alias: "Depreciation", level: 1, index: 80, type: "C", isLeaf: 1 == 0});
    $scope.lists.rows.push({key: "6810", alias: "Building Leasehold", level: 0, index: 81, type: "N", isLeaf: 0 == 0});
    $scope.lists.rows.push({key: "6820", alias: "Vehicles", level: 0, index: 82, type: "N", isLeaf: 0 == 0});
    $scope.lists.rows.push({key: "6830", alias: "Equipment", level: 0, index: 83, type: "N", isLeaf: 0 == 0});
    $scope.lists.rows.push({key: "6840", alias: "Furniture and Fixtures", level: 0, index: 84, type: "N", isLeaf: 0 == 0});
    $scope.lists.rows.push({key: "6850", alias: "Expenditure Other Assets", level: 0, index: 85, type: "N", isLeaf: 0 == 0});
    $scope.lists.rows.push({key: "6860", alias: "Amortization of Goodwill", level: 0, index: 86, type: "N", isLeaf: 0 == 0});
    $scope.lists.rows.push({key: "6920", alias: "Rent", level: 0, index: 87, type: "N", isLeaf: 0 == 0});
    $scope.lists.rows.push({key: "80", alias: "Other Income and Expense", level: 1, index: 88, type: "C", isLeaf: 1 == 0});
    $scope.lists.rows.push({key: "8000", alias: "Interest Income", level: 0, index: 89, type: "N", isLeaf: 0 == 0});
    $scope.lists.rows.push({key: "8010", alias: "Interest Expense", level: 0, index: 90, type: "N", isLeaf: 0 == 0});
    $scope.lists.rows.push({key: "8020", alias: "Gain/Loss on Sales of Asset", level: 0, index: 91, type: "N", isLeaf: 0 == 0});
    $scope.lists.rows.push({key: "8030", alias: "Other Income", level: 0, index: 92, type: "N", isLeaf: 0 == 0});
    $scope.lists.rows.push({key: "8040", alias: "Curr Xchg Gain/(Loss)", level: 0, index: 93, type: "N", isLeaf: 0 == 0});
    $scope.lists.rows.push({key: "8500", alias: "Taxes", level: 0, index: 94, type: "N", isLeaf: 0 == 0});
  
    $scope.table = $tm1Ui.tableCreate($scope, $scope.lists.rows, {preload: false, pageSize: 9999999});	

}]);

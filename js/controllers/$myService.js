app.service("$myService", ["$rootScope", "$q", "$tm1Ui", function($rootScope, $q, $tm1Ui){

    var cache = {

    };

    this.accounts = function(instance){

        if(cache.accounts){
            var defer = $q.defer();
            defer.resolve(cache.accounts);
            return defer.promise;
        }
        else {
            return $tm1Ui.dimensionElements(instance, "Account", {subset: "Net Income", attributes: "Description"}).then(function(result){
                cache.accounts = result;
                return result;
            });
        }

    };

    this.regions = function(instance){

        if(cache.regions){
            var defer = $q.defer();
            defer.resolve(cache.regions);
            return defer.promise;
        }
        else {
            return $tm1Ui.dimensionElements(instance, "Region", {subset: "All Countries", attributes: "Description"}).then(function(result){
                cache.regions = result;
                return result;
            });
        }

    };

    this.departments = function(instance){

        if(cache.departments){
            var defer = $q.defer();
            defer.resolve(cache.departments);
            return defer.promise;
        }
        else {
            return $tm1Ui.dimensionElements(instance, "Department", {subset: "Default", attributes: "Description"}).then(function(result){
                cache.departments = result;
                return result;
            });
        }

    };

}]);
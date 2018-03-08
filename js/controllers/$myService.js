app.service("$myService", ["$rootScope", "$q", "$tm1Ui", function($rootScope, $q, $tm1Ui){

    var cache = {

    };

    this.accounts = function(instance){

        if(!cache.instance){
            cache[instance] = {};
        }

        if(cache.accounts){
            var defer = $q.defer();
            defer.resolve(cache[instance].accounts);
            return defer.promise;
        }
        else {
            return $tm1Ui.dimensionElements(instance, "Account", {subset: "Net Income", attributes: "Description"}).then(function(result){
                cache[instance].accounts = result;
                return result;
            });
        }

    };

    this.regions = function(instance){

        if(!cache.instance){
            cache[instance] = {};
        }

        if(cache.regions){
            var defer = $q.defer();
            defer.resolve(cache[instance].regions);
            return defer.promise;
        }
        else {
            return $tm1Ui.dimensionElements(instance, "Region", {subset: "All Countries", attributes: "Description"}).then(function(result){
                cache[instance].regions = result;
                return result;
            });
        }

    };

    this.departments = function(instance){

        if(!cache.instance){
            cache[instance] = {};
        }

        if(cache.departments){
            var defer = $q.defer();
            defer.resolve(cache[instance].departments);
            return defer.promise;
        }
        else {
            return $tm1Ui.dimensionElements(instance, "Department", {subset: "Default", attributes: "Description"}).then(function(result){
                cache[instance].departments = result;
                return result;
            });
        }

    };

    this.periods = function(instance){

        if(!cache.instance){
            cache[instance] = {};
        }

        if(cache.periods){
            var defer = $q.defer();
            defer.resolve(cache[instance].periods);
            return defer.promise;
        }
        else {
            return $tm1Ui.dimensionElements(instance, "Period", {subset: "All Months", attributes: "Description"}).then(function(result){
                cache[instance].periods = result;
                return result;
            });
        }

    };

}]);
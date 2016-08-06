var flightApp = angular.module('flightApp');

/* range filter for fare */
flightApp.filter('rangeFilter', function() {
  return function(arrayVal, cond) {
    var filteredData = [];
    angular.forEach(arrayVal, function(obj) {
      if(cond.oneWayFlight) {
        if(obj.fare <= cond.max) {
          filteredData.push(obj);
          console.log(obj);
        }
      } else {
        if(obj.fareOriginal <= cond.max) {
          filteredData.push(obj);
          console.log(obj);
        }
      }
    })

    return filteredData;
  };
})

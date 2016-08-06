var flightApp = angular.module('flightApp');

/* service to get fligth details */
flightApp.factory('flightList', function($http){
  return {
    list: function(callback){
      $http.get('json/flightList.json').success(callback);
    }
  };
});
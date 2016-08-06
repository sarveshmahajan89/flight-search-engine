var flightApp = angular.module('flightApp');

flightApp.factory('flightList', function($http){
  return {
    list: function(callback){
      $http.get('json/flightList.json').success(callback);
    }
  };
});
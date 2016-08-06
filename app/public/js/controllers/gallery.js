var flightApp = angular.module('flightApp');

flightApp.controller('bcIBCtrl', function ($scope,$location,$http) {
	
	// to do stuff
	$scope.submit = function() {
		$http.get('/invest').success(function(data) {
			$scope.reponse = data;
		});
	};
});
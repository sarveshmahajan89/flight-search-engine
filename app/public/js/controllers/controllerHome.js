var flightApp = angular.module('flightApp');

/* home controller */
flightApp.controller('bcHomeCtrl', ['$scope', '$location', '$http', '$rootScope', 'flightList', '$filter', function ($scope, $location, $http, $rootScope, flightList, $filter) {
	$scope.oneway = true;
	$scope.personno = "Passengers";
	$scope.showCityList = false;
	$scope.showPopupOrigin = false;
	$scope.showPopupDest = false;
	$scope.invalidOrigin = false;
	$scope.invalidDest = false;
	$scope.invalidPassSelect = false;
	$scope.invalidDepDate = false;
	$scope.invalidReturnDate = false;
	$scope.showFlightNotification = false;
	$scope.cityList = ["Mumbai", "Pune", "Banglore", "Delhi", "Chennai", "Kolkata"];
	$scope.sliderVal = 20000;


	/* retireving flight details from flight list json using flightList custom service*/
	flightList.list(function(flightData) {
  		$scope.flight = flightData;
    });

	/* function to validate selected origin city from city list json */
	$scope.validateOriginCity = function() {
		var keepGoing = true;
		angular.forEach($scope.cityList, function(obj) {
			if(keepGoing) {
				if (obj === $scope.origin) {
					$scope.invalidOrigin = false;
					keepGoing = false;
				} else {
					$scope.invalidOrigin = true;
				}
			}

		});
	}

	/* function to validate selected destination city from city list json, alogn with to select different city from origin city */
	$scope.validateDestCity = function() {
		var keepGoing = true;
		angular.forEach($scope.cityList, function(obj) {
			if(keepGoing) {
				if (obj === $scope.destination) {
					$scope.invalidDest = false;
					if ($scope.origin === $scope.destination) {
						$scope.errorMessage = 'Error: Enter different destination';
						$scope.invalidDest = true;
					} else {
						$scope.invalidDest = false;
					}
					keepGoing = false;
				} else {
					$scope.invalidDest = true;
					$scope.errorMessage = 'Error: Please Enter destination city';
				}
			}

		});
	}

	/* function to validate number passengers is selected or not ? */
	$scope.validatePassSelect = function() {
		if ($scope.personno === 'Passengers') {
			$scope.invalidPassSelect = true;
		} else {
			$scope.invalidPassSelect = false;
		}
	}

	/* function to validate depart date */
	$scope.validateDepartDate = function() {
		if (typeof $scope.departDate === 'undefined' || $scope.departDate === null) {
			$scope.invalidDepDate = true;
		} else {
			$scope.invalidDepDate = false;
		}
	}

	/* function to validate return date */
	$scope.validateReturnDate = function() {
		if (typeof $scope.returnDate === 'undefined' || $scope.returnDate === null) {
			$scope.invalidReturnDate = true;
			$scope.dateErrorMessage = 'Error: Please Enter return date';
		} else {
			$scope.validateTwoDate();
			$scope.invalidReturnDate = false;
		}
	}

	/* function to validate return date and depart date*/
	$scope.validateTwoDate = function() {

		var depDate = $scope.departDate  || '';
		depDate = depDate.replace( /(\d{2})\/(\d{2})\/(\d{4})/, "$2/$1/$3");
		var retDate = $scope.returnDate  || '';
		retDate = retDate.replace( /(\d{2})\/(\d{2})\/(\d{4})/, "$2/$1/$3");
		if (new Date(depDate) > new Date(retDate)) {
			$scope.invalidReturnDate = true;
			$scope.dateErrorMessage = 'Error: Return date should be future date';
		} else {
			$scope.invalidReturnDate = false;
		}
	}

	/* function to submir form data before validating each field */
	$scope.submitForm = function() {
		$scope.validateOriginCity();
		$scope.validateDestCity();
		$scope.validatePassSelect();
		$scope.validateDepartDate();
		if (!$scope.oneway) {
			$scope.validateReturnDate();
		}		

		if (!$scope.invalidOrigin && !$scope.invalidDest && !$scope.invalidPassSelect && !$scope.invalidDepDate && !$scope.invalidReturnDate) {
			$scope.filteredVal = $filter('cityFilter')($scope.origin, $scope.destination, $scope.departDate, $scope.sliderVal, $scope.returnDate, $scope.flight.flightinfo);
	      	$scope.showCityList = true;
	      	if ($scope.filteredVal.length > 0) {
	      		$scope.showFlightNotification = false;
	      	} else {
	      		$scope.showFlightNotification = true;
	      	}
		} else {
			return;
		}
		
	};

	
	/* custom switch to select one way or round trip */
	$scope.switch = function() {
		$scope.oneway = !$scope.oneway;
	}

	/* function to show auto suggest popup for origin city */
	$scope.showPopupListOrigin = function() {
		$scope.showPopupOrigin = true;
	}
	/* function to set origin city from auto suggest popup */
	$scope.setSelectedModelOrigin = function(city) {
		$scope.origin = city ;
		$scope.validateOriginCity();
		$scope.showPopupOrigin = false;
	}

	/* function to show auto suggest popup for destination city */
	$scope.showPopupListDest = function() {
		$scope.showPopupDest = true;
	}
	/* function to set destination city from auto suggest popup */
	$scope.setSelectedModelDest = function(city) {
		$scope.destination = city ;
		$scope.validateDestCity();
		$scope.showPopupDest = false;
	}

	$scope.hidePopupList = function(e) {
		// to do for hiding popup
	}
	
	$scope.updateRange = function() {
		// to do task for range change
	}
}]);

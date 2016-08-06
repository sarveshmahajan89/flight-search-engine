var flightApp = angular.module('flightApp');


/* city filter*/
flightApp.filter('cityFilter', function(flightList) {
  return function(from, to, departDate, range, returnDate, jsonData) {
    var sendData = [];

    var extend = function (obj, src) {
        for (var key in src) {
            if (src.hasOwnProperty(key)) obj[key] = src[key];
        }
        return obj;
    }
    
    angular.forEach(jsonData, function(obj) {
      if(obj.from === from && obj.to === to && obj.date === departDate) {

        var returnFlightArray = [];
        var returnFlight = {};
        var allFlightList = {};
        obj.fare = parseInt(obj.fare);
        obj.fareOriginal = obj.fare;

        angular.forEach(jsonData, function(obj2) {
          if(obj2.from === to && obj2.to === from && obj2.date === returnDate) {
            returnFlightArray.push(obj2);
            obj2.fare = parseInt(obj2.fare);
            obj.fare = obj.fare + obj2.fare;
            // console.log(obj2);
          }     
        });

        returnFlight = {
          returnData: returnFlightArray
        };

        allFlightList = extend(obj, returnFlight);

        sendData.push(allFlightList);
        console.log(allFlightList);
      }     
    });

    return sendData;
  };
})

var flightApp = angular.module('flightApp');

/* date picker component*/
flightApp.directive('myPicker', function() {
    return {
        restrict: 'A',
      require:'ngModel',
        link : function (scope, element, attrs, ngModelCtrl) {
            $(function(){
                element.datepicker({
                    dateFormat:'dd/mm/yy',
                    onSelect:function (mydat) {
                        ngModelCtrl.$setViewValue(mydat);
						
                        scope.$digest();
                    }
                });
            });
        }
    }
});

'use strict';

wwwApp.controller('MainCtrl', function($scope) {
	function setupPattern() {
		var i =0;
	  $scope.pattern = []
	  for(i=0; i<4; i+=1) {
	  	$scope.pattern[i] = [false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false];
	  }	
	}	

  setupPattern();
  $scope.awesomeThings = [
    'HTML5 Boilerplate',
    'AngularJS',
    'Testacular'
  ];
});

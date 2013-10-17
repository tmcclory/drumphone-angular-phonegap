'use strict';

wwwApp.controller('MainCtrl', function($scope) {

  
  function setupPattern() {
		var i =0;
	  $scope.pattern = []
	  for(i=0; i<4; i+=1) {
	  	$scope.pattern[i] = [false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false];
	  }	
  }	

  function initialize() {
  	LowLatencyAudio.preloadAudio("kick", "res/kit/kick.ogg",1, function() {console.log("Kick Load success")}, function() {console.log("kick Load failed")});
	LowLatencyAudio.preloadAudio("hat", "res/kit/hat.ogg",1, function() {console.log("hat Load success")}, function() {console.log("hat Load failed")});
    LowLatencyAudio.preloadAudio("crash", "res/kit/crash.ogg",1, function() {console.log("crash Load success")}, function() {console.log("crash Load failed")});
    LowLatencyAudio.preloadAudio("snare", "res/kit/snare.ogg",1, function() {console.log("snare Load success")}, function() {console.log("snare Load failed")});
 
  }

  setupPattern();
  setTimeout(initialize, 6000);
  
  var beat = 0;
  var tempo = 100;
  var player;
  notes = ['kick', 'hat', 'snare', 'crash']
  $scope.play = function() {
  	var i=0;
  	for(i=0;i<4;i+=1) {
  		if($scope.pattern[i][beat]) {
  			LowLatencyAudio.play(notes[i]);
  		}
  	}
  	beat=(beat+1)%16
  	player = setTimeout($scope.play, tempo);
  };
  
  $scope.stop = function() {
  	clearTimeout(player);
  	beat=0;
  };
  
  $scope.awesomeThings = [
    'HTML5 Boilerplate',
    'AngularJS',
    'Testacular'
  ];
});

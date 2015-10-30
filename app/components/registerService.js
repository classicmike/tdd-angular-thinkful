angular.module('RegisterModule', ["UsernameModule"])
	.controller('RegisterCtrl', function(usernameAvailable, $scope){
		$scope.submit = function(){
			//send data to the API
		};
	})
angular.module('HelloModule', [])
	.factory('uppercaseService', function(){
		return function(){
			return 'hello';
		}
	})
	.factory('helloService', function(){
		return function(){
			return 'hello';
		}
	});
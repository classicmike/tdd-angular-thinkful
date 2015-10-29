describe('helloService', function(){
	//before the hello module is initiated all
	//parts of the module are available for testing.
	
	beforeEach(module('HelloModule'));

	it('should return "hello" when called', function(){
		module(function($provide){
			$provide.value('uppercaseService', function(){
				return value;
			})
		});

		inject(function(helloService){
			expect(helloService()).toBe("hello");
		});
	});
});


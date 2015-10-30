describe('FilterModule', function(){
	beforeEach(module("FilterModule"));

	describe('even filter', function(){
		it('should only return even numbers', function(evenFilter){
			module(function($provide){
				$provide.value('evenFilter', function(values){
					return values;
				});
			});

			expect(evenFilter([1,2,3,4])).toEqual([2,4]);
		});
	});
})





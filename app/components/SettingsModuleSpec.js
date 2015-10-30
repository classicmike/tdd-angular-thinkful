describe("SettingsModule", function(){
	beforeEach(module("SettingsModule"));

	describe("/settings route", function(){
		it('should load the template, controller and call the resolve', inject(function($location, $rootScope, $httpBackend, $route){
			//new when get
			$httpBackend.whenGET('settings.html').respond('...');

			//expect get?
			$httpBackend.expectGET('/api/current-user').respond('...');

			$rootScope.$apply(function(){
				$location.path('/settings');
			});

			expect($route.current.controller).toBe("SettingsCtrl");
			expect($route.current.loadedTemplateUrl).toBe("settings.html");

			//ask joe/thomas during office hours about this one.
			$httpBackend.flush();

			//verify no outstanding request?
			$httpBackend.verifyNoOutstandingRequest();
			//verify no outstanding expectation?
			$httpBackend.verifyNoOutstandingExpectation();
		}));
	});
})
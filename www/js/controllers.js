angular.module('app.controllers', [])

.run(function($rootScope, $localStorage){
	$rootScope.$storage = $localStorage;
})

.controller('pageCtrl', function($scope) {

})
 

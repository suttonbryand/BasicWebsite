var myApp = angular.module('myApp', []);

myApp.controller('ListController', function Listcontroller($scope){
	$scope.entries = [];

	$scope.addEntry = function(){
		if(!$scope.validDate($scope.dob) || !$scope.validGPA($scope.gpa)){
			return;
		}

		$scope.entries.push({
			'firstname' : $scope.fn,
			'lastname' : $scope.ln,
			'dob' : $scope.dob,
			'gpa' : $scope.gpa
		});

		$scope.$apply();
	};

	$scope.validDate = function(input){
		return input.match(/^[0-9][0-9]\/[0-9][0-9]\/[0-9][0-9][0-9][0-9]$/);
	};

	$scope.validGPA = function(input){
		return input.match(/^[0-9]\.[0-9][0-9]?$/);
	};

	$scope.dobCheck = function(){
		return $scope.validDate($scope.dob) ? "" : "has-error";
	};

	$scope.gpaCheck = function(){
		return $scope.validGPA($scope.gpa) ? "" : "has-error";
	}

});
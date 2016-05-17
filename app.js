// create angular app
	var validationApp = angular.module('validationApp', []);
//create a reference to the firebase 
	var dB = new Firebase("https://testangu.firebaseio.com/");
	// create angular controller
	validationApp.controller('mainController', function($scope) {

		// function to submit the form after all validation has occurred			
		$scope.submitForm = function() {

			// check to make sure the form is completely valid
			if ($scope.userForm.$valid) {
				alert('Obrigada por logar, em breve voce sera redirecionado para dashboard!');
			}


		};

			

	});
	var ref = new Firebase("https://testangu.firebaseio.com/");
		
		function signIn(){
				ref.authWithPassword({
				email: $('#email').val(),
					password: $('#senha').val()
					}, function (error, authData){
						if(error){
							console.log("Login Error",error);
						}else{
							console.log("Authentication complete!",authData);

							$('#email').val('');
							$('#senha').val('');
							window.location.href = "dashboard.html";
						}
					});
			}
			
			function signOut(){
				ref.unauth();
			}
			
			
			
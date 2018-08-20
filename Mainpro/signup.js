var app = angular.module('angularSignUp',[])
app.controller('angularCtrlSignUpPage',function($scope, $http, $log){
	if(localStorage.getItem("emailid")!=null||localStorage.getItem("signupemail")!=null)
    {
      $scope.temp=0;
    }
    else{
      $scope.temp=1;
    }
	var self=this;
	$scope.submit = function(){
		console.log('reached');
		var data = {
			"firstName" : $scope.firstName,
			"lastName" : $scope.lastName,
			"phoneNumber" : $scope.phonenumber,
			"email" : $scope.email,
			"password" : $scope.password
		};
		$http.post('http://192.168.43.250:8083/user/signup',data).then(function(response){
			if(1==response.data){
				localStorage.setItem("signupemail",$scope.email);
				alert("Successfully signed in");
				window.location="/index1.html";
			}
			else{
				alert("Not Successfull");
				window.location="/signup.html";
			}
		});
	}
	$scope.signupform = function(){
		window.location="/signup.html";
	}
	$scope.login = function(){
		window.location="/login.html";
	}
	$scope.profile = function(){
		window.location="/profile.html";
	}
	$scope.history = function(){
		window.location="/history.html";
	}
	$scope.catemob = "Mobiles";
	$scope.catemens = "Mens";
	$scope.Category1 = function(){
		$log.info($scope.catemob);
		window.location="/Productpagecat.html?cate="+$scope.catemob;
	}
	$scope.Category2 = function(){
		$log.info($scope.catemob);
		window.location="/Productpagecat.html?cate="+$scope.catemens;
	}
	$scope.cart = function(){
    window.location="/addtocart.html";
  }
	$scope.logout = function(){
		if(localStorage.getItem("emailid")!=null||localStorage.getItem("signupemail")!=null)
		{
			localStorage.removeItem('emailid');
			localStorage.removeItem('signupemail');
			alert("logout successfull");
		}
		else{
			alert("User not found...Register..");
			window.location="/signup.html";
		}
	}
	var searchdata = $scope.search1;
	$log.info($scope.search1);

	$scope.search = function(){
		window.location='/searchresultpage.html?pro='+$scope.search1;
	}
});
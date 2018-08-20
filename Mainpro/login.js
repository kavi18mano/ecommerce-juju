var app = angular.module('angularlogin',[])
app.controller('angularCtrlloginPage',function($scope, $http, $log){
	if(localStorage.getItem("emailid")!=null||localStorage.getItem("signupemail")!=null)
    {
      $scope.temp=0;
    }
    else{
      $scope.temp=1;
    }
	$scope.submit = function(){
		var emailid=$scope.email;
		var password=$scope.password;
		if(localStorage.getItem("signupemail")==null && localStorage.getItem("emailid")==null){
			$http.get('http://192.168.43.250:8083/user/login?id='+emailid+'&passwd='+password).then(function(response){
			if(1==response.data){
				localStorage.setItem("emailid", emailid);  
				console.log(emailid);
				alert("Successfully logged in");
				window.location="/index1.html";
			}
			else{
				alert("Not Successfull");
				window.location="/login.html";
			}
		});
		}
		else
		{
			alert("user already exist");
		}
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
	$scope.logout = function(){
		if(localStorage.getItem("emailid")!=null||localStorage.getItem("signupemail")!=null)
		{
			localStorage.clear();
			alert("logout successfull");
			window.location="/index1.html";
		}
		else{
			alert("User not found...Register..");
			window.location="/signup.html";
		}
	}
	$scope.cart = function(){
    window.location="/addtocart.html";
  }
	var searchdata = $scope.search1;
	$log.info($scope.search1);

	$scope.search = function(){
		window.location='/searchresultpage.html?pro='+$scope.search1;
	}
});

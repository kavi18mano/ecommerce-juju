var app=angular.module("angularApp1",[]);
app.controller('angularCtrl1',function($scope,$filter,$log,$http){
	if(localStorage.getItem("emailid")!=null||localStorage.getItem("signupemail")!=null)
    {
      $scope.temp=0;
    }
    else{
      $scope.temp=1;
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
			localStorage.clear();
			alert("logout successfull");
			window.location="/index1.html";
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
	$log.info('log is working');
	if(localStorage.getItem("emailid")!=null){
		$http.get('http://10.177.2.45:8085/order/getallorder/?id='+localStorage.getItem("emailid")).then(function(response){
			$scope.user=response.data;
			$log.info($scope.user);
			$log.info(response.data);
		});
	}
	else if(localStorage.getItem("signupemail")!=null){
		$http.get('http://10.177.2.45:8085/order/getallorder/?id='+localStorage.getItem("signupemail")).then(function(response){
			$scope.user=response.data;
			$log.info($scope.user);
			$log.info(response.data);
		});
	}
	else
	{
		alert("User not found...Register..");
		window.location="/signup.html";
	}
});
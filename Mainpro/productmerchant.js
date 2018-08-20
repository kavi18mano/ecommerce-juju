var app = angular.module('angularProductMerchant', []);
app.controller('angularCtrlMerchantProduct',function($scope,$http,$log){
	if(localStorage.getItem("emailid")!=null||localStorage.getItem("signupemail")!=null)
    {
      $scope.temp=0;
    }
    else{
      $scope.temp=1;
    }
	var urlParams = new URLSearchParams(window.location.search);
	$scope.productid = urlParams.get('product_id');
	console.log( $scope.productid);
	$http.post('http://10.177.1.246:8080/product/getproductorder?productid='+$scope.productid).then(function(response){
		$scope.products=response.data;
		$scope.keyobj = Object.keys($scope.products.attributes);
		$scope.valuobj = $scope.products.attributes;
	});
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
});
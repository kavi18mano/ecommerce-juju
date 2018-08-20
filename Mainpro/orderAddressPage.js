var app = angular.module('angularorder',[])
app.controller('angularCtrlorder',function($scope, $http, $log){
	if(localStorage.getItem("emailid")!=null||localStorage.getItem("signupemail")!=null)
	{
		$scope.temp=0;
	}
	else{
		$scope.temp=1;
	}
	var urlParams = new URLSearchParams(window.location.search);
	$scope.productid = urlParams.get('produ_id');
	var merch_id = urlParams.get('merch_id');
	var quantity = urlParams.get('quan');
	var price = urlParams.get('price');
	var mer_name = urlParams.get('mer_name');
	var pro_name = urlParams.get('pro_name')
	console.log($scope.productid);
	console.log(merch_id);
	console.log(quantity);
	var data = {
		"userEmailid" : localStorage.getItem("emailid"),
		"streetName" : $scope.address,
		"city":$scope.city,
		"pincode" : $scope.pincode,
	};
		$scope.submit = function(){
			if(localStorage.getItem("emailid")!=null){
				var data = {
					"userEmailid" : localStorage.getItem("emailid"),
					"streetName" : $scope.address,
					"city":$scope.city,
					"pincode" : $scope.pincode,
				};
				if(quantity==null)
				{
					console.log('sdkbfkjs');
					$http.post('http://10.177.2.45:8085/order/addallorder',data).then(function(response){
						alert('Order placed successfully');
						window.location="/index1.html";
					});
				}
				else{
					$http.post('http://10.177.2.45:8085/order/addorderbycart/?productname='+pro_name+'&merchant='+mer_name+'&quantity='+quantity+'&price='+price,data).then(function(response){
						alert('Order placed successfully');
						window.location="/index1.html";
				});
				}
			}		
			else if(localStorage.getItem("signupemail")!=null){
				var data = {
					"userEmailid" : localStorage.getItem("signupemail"),
					"streetName" : $scope.address,
					"city":$scope.city,
					"pincode" : $scope.pincode,
				};
				if(quantity==null)
				{
					$http.post('http://10.177.2.45:8085/order/addallorder',data).then(function(response){
						alert('Order placed successfully');
						window.location="/index1.html";
					});
				}
				else{
					$http.post('http://10.177.2.45:8085/order/addorderbycart/?productname='+pro_name+'&merchant='+mer_name+'&quantity='+quantity+'&price='+price,data).then(function(response){
						alert('Order placed successfully');
						window.location="/index1.html";
				});
				}	
			}
			else{
				alert("User not found...Register..");
				window.location="/signup.html";
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
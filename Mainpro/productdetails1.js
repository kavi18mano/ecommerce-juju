var app = angular.module('angularApp', [])
app.controller('angularCtrlProduct',function($scope,$http,$log){
	if(localStorage.getItem("emailid")!=null||localStorage.getItem("signupemail")!=null)
    {
      $scope.temp=0;
    }
    else{
      $scope.temp=1;
    }
	var urlParams = new URLSearchParams(window.location.search);
	$scope.productid = urlParams.get('product_id');
	var temp = urlParams.get('merchant_id');
	$http.post('http://10.177.1.246:8080/product/getproductmerchantdetails?productid='+$scope.productid+'&merchantid='+temp).then(function(response){
		$scope.products=response.data;
		$scope.keyobj = Object.keys($scope.products.attributes);
		$scope.valuobj = $scope.products.attributes;
	});
	$scope.quantitymod = {
		value1:1
	};
	console.log('quan'+$scope.quantitymod.value1);
		$scope.merchantrate = {
			value2:4
		};
		console.log('mer'+$scope.merchantrate.value2);


		$scope.cart1	= function(){
			$log.info($scope.quantitymod.value1);
			if($scope.quantitymod.value1==undefined)
			{
				alert('hjdvhj');
			}
			else{
			/*	if(localStorage.getItem("emailid")!=null){
					var data = {
						"emailId" : localStorage.getItem("emailid"),
						"productId" : $scope.productid,
						"productName" : $scope.products.name,
						"merchantName" : $scope.products.merchantDuplicate.merchantname,
						"price" : $scope.products.merchantDuplicate.price,
						"quantity" : $scope.quantitymod.value1
					};
					$log.info(data);
					$http.post('http://10.177.1.246:8081/cart/addproduct',data).then(function(response){
						$log.info(response.data);
						if(1==response.data){
							alert('Successfully added to the cart');
						}
						else{
							alert('Not successfully added to the cart');
						}
					});
			}
			else if(localStorage.getItem("signupemail")!=null){
				var data = {
					"emailId" : localStorage.getItem("signupemail"),
					"productId" : $scope.productid,
					"productName" : $scope.products.name,
					"merchantName" : $scope.products.merchantDuplicate.merchantname,
					"price" : $scope.products.merchantDuplicate.price,
					"quantity" : $scope.quantitymod.value1
				};
				$log.info(data);
				$http.post('http://10.177.1.246:8081/cart/addproduct',data).then(function(response){
					$log.info(response.data);
					if(1==response.data){
						alert('Successfully added to the cart');
					}
					else{
						alert('The product is already existing in the cart');
					}
				});
			}
			else{
				alert("User not found...Register..");
				window.location="/signup.html";
			}
			*/
		}
		
	}
	$scope.buyNow = function(){
		if($scope.quantitymod.value1<0)
			{
				alert('hjdvhj');
			}
			else
			{
				console.log($scope.quantitymod.value1);
				if(localStorage.getItem("emailid")!=null){
					$http.get('http://10.177.1.246:8080/product/checkstock?productid='+$scope.productid+'&merchantid='+$scope.products.merchantDuplicate.merchantid+'&quantity='+$scope.quantitymod.value1).then(function(response){
						if(1==response.data){
							window.location="/orderAddressPage.html?produ_id="+$scope.productid+"&quan="+$scope.quantitymod.value1+"&merch_id="+temp+"&pro_name="+$scope.products.name+"&mer_name="+$scope.products.merchantDuplicate.merchantname+"&price="+$scope.products.merchantDuplicate.price;
						}
						else{
								alert('The quantity is not avaliable');
								window.location="/productdetails1.html";
						}
					});
				}
				else if(localStorage.getItem("signupemail")!=null){
					$http.get('http://10.177.1.246:8080/product/checkstock?productid='+$scope.productid+'&merchantid='+$scope.products.merchantDuplicate.merchantid+'&quantity='+$scope.quantitymod.value1).then(function(response){
						if(1==response.data){
							window.location="/orderAddressPage.html?produ_id="+$scope.productid+"&quan="+$scope.quantitymod.value1+"&merch_id="+temp+"&pro_name="+$scope.products.name+"&mer_name="+$scope.products.merchantDuplicate.merchantname+"&price="+$scope.products.merchantDuplicate.price;
						}
						else{
								alert('The quantity is not avaliable');
								window.location="/productdetails1.html";
						}
					});
				}
				else{
					alert("User not found...Register..");
					window.location="/signup.html";
				}
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
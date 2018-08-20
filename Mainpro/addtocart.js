var app = angular.module('angularCart', [])
app.controller('angularCtrlCart',function($scope,$http,$log){
  if(localStorage.getItem("emailid")!=null||localStorage.getItem("signupemail")!=null)
    {
      $scope.temp=0;
    }
    else{
      $scope.temp=1;
    }
  console.log(localStorage.getItem("emailid"));
  if(localStorage.getItem("emailid")!=null){
    $http.get('http://10.177.1.246:8081/cart/getall?emailId='+localStorage.getItem("emailid")).then(function(response){
      $scope.cart=response.data;
      console.log($scope.cart);
      $scope.quantitymod = {
        value1:$scope.quantitymod
      };
      $log.info(response.data);
    });
    $scope.update = function(productname,quantitymod,merchantname){
      if(quantitymod<1){
        alert('Quantity must be positive value..');
        window.location="/addtocart.html";
      }
      else{
        $http.post('http://10.177.1.246:8081/cart/updatequantity?emailId='+localStorage.getItem("emailid")+'&productName='+productname+'&quantity='+quantitymod+'&merchantName='+merchantname).then(function(response){
            window.location="/addtocart.html";
        });
      }
    }
    $scope.delete=function(productname,quantitymod,merchantname){
      $http.get('http://10.177.1.246:8081/cart/deleteproduct?emailId='+localStorage.getItem("emailid")+'&productName='+productname+'&quantity='+quantitymod+'&merchantName='+merchantname).then(function(response){
        $scope.cart=response.data;
        $log.info(response.data);
        window.location="/addtocart.html";
      });
    }

    $scope.deleteall = function(){
      $http.get('http://10.177.1.246:8081/cart/deleteall?emailId='+localStorage.getItem("emailid")).then(function(response){
        $log.info(response.data);
        alert('Your cart is empty');
        window.location='/index1.html';
      });
    }
  }
  else if(localStorage.getItem("signupemail")!=null){

    $http.get('http://10.177.1.246:8081/cart/getall?emailId='+localStorage.getItem("signupemail")).then(function(response){
      $scope.cart=response.data;
      $log.info(response.data);
    });
    $scope.delete=function(productname,quantitymod,merchantname){
      $http.get('http://10.177.1.246:8081/cart/deleteproduct?emailId='+localStorage.getItem("signupemail")+'&productName='+productname+'&quantity='+quantitymod+'&merchantName='+merchantname).then(function(response){
        $scope.cart=response.data;
        $log.info(response.data);
        window.location="/addtocart.html";
      });
    }

    $scope.update = function(productname,quantitymod,merchantname){
      if(quantitymod<1){
        alert('Quantity must be positive value..');
        window.location="/addtocart.html";
      }
      else{
        $http.post('http://10.177.1.246:8081/cart/updatequantity?emailId='+localStorage.getItem("signupemail")+'&productName='+productname+'&quantity='+quantitymod+'&merchantName='+merchantname).then(function(response){
            window.location="/addtocart.html";
        });
      }
    }
    $scope.deleteall = function(){
      $http.get('http://10.177.1.246:8081/cart/deleteall?emailId='+localStorage.getItem("signupemail")).then(function(response){
        $log.info(response.data);
        alert('Your cart is empty');
        window.location="/addtocart.html";
      });
    }
  }
  else{
    alert("User not found...Register..");
    window.location="/signup.html";
  }
  $scope.checkout = function(productname,quantity,merchantname,price){

    if(localStorage.getItem("emailid")!=null){
      $http.get('http://10.177.1.246:8081/cart/deleteproduct?emailId='+localStorage.getItem("emailid")+'&productName='+productname+'&quantity='+quantity+'&merchantName='+merchantname).then(function(response){
        $log.info(response.data);
      });
    }
    else if(localStorage.getItem("signupemail")!=null){
      $http.get('http://10.177.1.246:8081/cart/deleteproduct?emailId='+localStorage.getItem("signupemail")+'&productName='+productname+'&quantity='+quantitymod+'&merchantName='+merchantname).then(function(response){
        $log.info(response.data);
      });
    }
    window.location="/orderAddressPage.html?pro_name="+productname+"&quan="+quantity+"&mer_name="+merchantname+"&price="+price;
  }
  $scope.buyall = function(){
    window.location="/orderAddressPage.html";
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
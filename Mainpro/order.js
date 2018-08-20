var app = angular.module('orderApp', [])
app.controller('orderContrl',function($scope,$log){
  if(localStorage.getItem("emailid")!=null||localStorage.getItem("signupemail")!=null)
    {
      $scope.temp=0;
    }
    else{
      $scope.temp=1;
    }
  $scope.descriptionOfProduct = "Your Order has been placed successfully and you receive an email about product details....'\n'Thank you..Have a good day!!!....";
  $scope.submit = function(){
    window.location='/index1.html';
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
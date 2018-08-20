var app = angular.module('angularApp', [])
app.controller('angularCtrlCat',function($scope, $http,$log){
  if(localStorage.getItem("emailid")!=null||localStorage.getItem("signupemail")!=null)
    {
      $scope.temp=0;
    }
    else{
      $scope.temp=1;
    }
  var urlParams = new URLSearchParams(window.location.search);
  var temp = urlParams.get('cate');
  $log.info(urlParams.get('cate'));
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
      localStorage.removeItem('emailid');
      localStorage.removeItem('signupemail');
      alert("logout successfull");
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
 $http.post('http://10.177.1.246:8080/product/getproductbytype?type='+temp).then(function(response){
  $scope.products=response.data;
  $log.info(response.data);
  $scope.merchant = response.data.data;
  $log.info($scope.merchant);
});
});
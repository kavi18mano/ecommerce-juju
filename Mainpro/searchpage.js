var app = angular.module('angularApp1', [])
app.controller('angularCtrl',function($scope, $http,$log){
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
 var urlParams = new URLSearchParams(window.location.search);
 $scope.productid = urlParams.get('pro');
 // console.log($scope.productid);

 $http.get('http://10.177.2.45:8983/solr/juju/select?q=name:'+$scope.productid+'*').then(function(responce){
  
  var doc = responce.data;
  $scope.productobj=doc.response.docs;
});

});
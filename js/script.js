// this module needs to be refrences in html page
var myApp  = angular.module("myModule",[]);
// attaching controller to create momdel for view to show it
myApp.controller("myController",function($scope)
{
  $scope.message = "My first Angular Model";
  // object in Model
  var employee = {
    firstName : "Bhupendra",
    secondName : "Negi"
  };
  $scope.employee = employee;
});

// another controller to load images with ng-src directive
myApp.controller("ImgController", function($scope){

var country  = {
  name:"INDIA",
  capital:"New Delhi",
  image:"images/flag.png"
};
// attaching country model to $scope.
$scope.country = country;
});

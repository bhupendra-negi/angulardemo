// this module needs to be refrences in html page
var myApp = angular.module("myModule", []);
// attaching controller to create momdel for view to show it
myApp.controller("myController", function($scope) {
  $scope.message = "My first Angular Model";
  // object in Model
  var employee = {
    firstName: "Bhupendra",
    secondName: "Negi"
  };
  $scope.employee = employee;
});

// another controller to load images with ng-src directive
myApp.controller("ImgController", function($scope) {
  var country = {
    name: "INDIA",
    capital: "New Delhi",
    image: "images/flag.png"
  };
  // attaching country model to $scope.
  $scope.country = country;
});

// below function adds simple ng-repeat controller
myApp.controller("RepeatController", function($scope) {

  var friends = [{
    name: "bhupendra",
    city: "doon"
  }, {
    name: "sid",
    city: "srinagar"
  }, {
    name: "shubham",
    city: "gurgoan"
  }];

  $scope.friends = friends;
  // added complex ng-repeat directive

  var countries = [{
      name: "India",
      cities: [{
        name: "Pune"
      }, {
        name: "Dehradun"
      }, {
        name: "Bangalore"
      }]
    }, {
      name: "US",
      cities: [{
        name: "Los Angeles"
      }, {
        name: "Chicago"
      }, {
        name: "New York"
      }]
    }, {
      name: "Australia",
      cities: [{
        name: "Adelaide"
      }, {
        name: "Brisbrane"
      }, {
        name: "Sydeny"
      }]
    }]
    // add to model
  $scope.countries = countries;
});
// controller for angualr events ng-click

myApp.controller("TechnologyController", function($scope) {

  var technologies = [{
    name: "PHP",
    likes: 0,
    disklikes: 0
  }, {
    name: "ASP.NET",
    likes: 0,
    disklikes: 0
  }, {
    name: "JAVA",
    likes: 0,
    disklikes: 0
  }, {
    name: "NODE.js",
    likes: 0,
    disklikes: 0
  }];

  $scope.technologies = technologies;
  // attaching angular evenst to scope object
  // technology object would be fetched from ng-repeat
  $scope.incrementLikes = function(technology)
  {
    technology.likes++;
  };
  $scope.decrementLikes = function(technology)
  {
    technology.disklikes++;
  };


});

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
  $scope.incrementLikes = function(technology) {
    technology.likes++;
  };
  $scope.decrementLikes = function(technology) {
    technology.disklikes++;
  };
});
// controller for filters to create model
myApp.controller("FiltersController", function($scope) {

  //creating employee data
  var employees = [{
    name: "Ram",
    dob: new Date("January 23,1977"),
    gender: "Male",
    salary: 55000.78
  }, {
    name: "Zuzu",
    dob: new Date("January 23,1967"),
    gender: "Male",
    salary: 95000.78
  }, {
    name: "Askar",
    dob: new Date("January 23,1987"),
    gender: "Female",
    salary: 5000.78
  }, {
    name: "Geeta",
    dob: new Date("January 23,1990"),
    gender: "Female",
    salary: 45000.78
  }];
  $scope.employees = employees;
  $scope.rowlimit = 2;
  //model for sorting records
  $scope.sortColumn = 'name';
  // code for bidirectional sort on click of table headers
  $scope.reverseSort = false;
  $scope.sortData = function (column)
  {
    $scope.reverseSort = ($scope.sortColumn == column)? !$scope.reverseSort : false;
    $scope.sortColumn = column;
  }
  $scope.getSortClass = function(column)
  {
  if($scope.sortColumn == column)
  {
    return ($scope.reverseSort) ? "arrow-down" : "arrow-up" ;
  }
   else return '' // removes sorting icon from other
  }
  // adding filtering function to filter not in all columns
  $scope.search = function(item)
  {
    if ($scope.searchText === undefined) return true;
    else {
       if  (item.name.toLowerCase().indexOf($scope.searchText.toLowerCase()) != -1 )
       { console.log(item);
         return true;

       }
       if (item.gender.toLowerCase().indexOf($scope.searchText.toLowerCase()) != -1 )
       {
         return true;
       }

    }
     return false;

  }




});
// custom filter controller
myApp.controller("CustomFilterController", function($scope) {

  var employees = [{
    name: "Ram",
    gender: 1,
    salary: 55000.78
  }, {
    name: "Zuzu",
    gender: 3,
    salary: 95000.78
  }, {
    name: "Askar",
    gender: 1,
    salary: 5000.78
  }, {
    name: "Geeta",
    gender: 2,
    salary: 45000.78
  }];
  $scope.employees = employees;
  
});

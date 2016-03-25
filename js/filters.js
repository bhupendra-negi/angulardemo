// custom filter file
myApp.filter('gender', function() {

  return function(gender)
   {
     if (gender == 1) return 'Male'
     else if (gender == 2) return 'Female'
     else return 'Not Disclosed'
   }


});

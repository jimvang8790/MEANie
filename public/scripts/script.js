var myApp = angular.module( 'myApp', [] );

// set up a controller (inject $http if using);
myApp.controller( 'WhereMyPeeps', function( $http ){ //NOTE remove ['$http']

  // variable global to this controller
  var vm = this;

  // array attached to controller (makes if aviablie to DOM)
  vm.allTheRecords = [];

  vm.addRecord = function(){
    console.log('in addRecord:');
    var objectToSend ={
      name: vm.nameIn,
      location: vm.locationIn,
    };// end objectToSend
    console.log('add record', objectToSend);

    // send item to app.js(sever)
    $http({
      method: 'POST',
      url: '/testPost',
      data: objectToSend
    }).then(function(response){
      console.log('back from sever:', response);
    });// end $http

    // empty inputs
    vm.nameIn ='';
    vm.locationIn='';

    vm.getRecords(); //NOTE call inorder to show on DOM
    //update from sever
}; // end of vm.addRecord function

  vm.getRecords = function(){
    console.log('in getRecords');

    $http({
      method: 'GET',
      url: '/getRecords', //NOTE
    }).then(function(response){
      // vm.allTheRecords = response;
      vm.allTheRecords =  response.data;
    console.log( vm.allTheRecords );
  }); // end $http
   function myError( response ){
     console.log( response.statusText );
   }
  };// end getRecords
}); // end WhereMyPeeps controller

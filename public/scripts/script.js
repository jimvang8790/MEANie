var myApp = angular.module( 'myApp', [] );

// set up a controller (inject $http if using);
myApp.controller( 'WhereMyPeeps', function( $http ){ //NOTE remove ['$http']

var vm = this;

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
  //update from sever
}; // end of vm.addRecord function

vm.getRecords = function(){
$.http({
method: 'GET',
url: '/getRecords',
}).then( function( response ){
vm.allTheRecords = response;
console.log( vm.allTheRecords );
}), function myError( response ){
console.log( response.statusText );
};
};
});

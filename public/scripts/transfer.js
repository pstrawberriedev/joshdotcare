/*
  transfer.js
*/

// Say Hi outside of doc ready
console.log('--> transfer.js');

// On jQuery DOM ready
$(document).ready(function() {
  
  //Say Hi
  console.log('--> transfer.js (doc ready)');
  
  // How to order js? lol...doc ready matters in this instance
  if( $('[data-objects=first-test] li').length ) {
    
    objects.test.first = "modified first test object"
    console.log(objects.test.first);

  }

}); // end jQuery doc ready
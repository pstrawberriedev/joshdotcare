/*
  scratch.js
*/

// Selfie!
(function() {
  
  // Say Hi!
  console.log('--> scratch.js');
  
  // Flowtype Init
  // http://simplefocus.com/flowtype/
  $('body').flowtype({
     minimum   : 320,
     maximum   : 1980,
     minFont   : 17,
     maxFont   : 20,
     fontRatio : 30
  });
  console.log('----> flowtype init');
  
})();

// Home Page
// _
if($('#home').length) {
  
 var swiper = new Swiper('.swiper-container', {
    pagination: '.swiper-pagination',
    slidesPerView: 2,
    paginationClickable: true,
    spaceBetween: 30,
    freeMode: true,
    freeModeMomentum: false
  });
  
}

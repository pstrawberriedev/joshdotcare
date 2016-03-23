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

  // Swiper!
  // http://idangero.us/swiper/
  var swiper = new Swiper('.swiper-container', 
                          {
    scrollbar: '.swiper-scrollbar',
    scrollbarHide: true,
    slidesPerView: 2,
    paginationClickable: true,
    spaceBetween: 30,
    freeMode: true,
    freeModeMomentum: false,
    keyboardControl: true,
    mousewheelControl: true,
    hashnav: true,
    
  });

}

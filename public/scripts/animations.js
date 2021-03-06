/*
  animations.js
*/

// Selfie!
(function() {
  console.log('--> animations.js');
})();

// Define DOM Elements
// _
var animate = {};
animate.footer = $('footer');
animate.footerTriggers = $('footer h5');
animate.footerLists = $('footer ul');
animate.footerIcons = $('footer i');
animate.header = $('header');

// Generic: GSAP Cards!
// http://codepen.io/GreenSock/pen/yzahJ
// https://greensock.com/
// _
TweenLite.set(".cardWrapper", {perspective:800});
TweenLite.set(".card", {transformStyle:"preserve-3d"});
TweenLite.set(".back", {rotationY:-180});
TweenLite.set([".back", ".front"], {backfaceVisibility:"hidden"});

$(".cardWrapper").hover(
  function() {
    TweenLite.to($(this).find(".card"), 1.2, {rotationY:180, ease:Back.easeOut});
  },
  function() {
    TweenLite.to($(this).find(".card"), 1.2, {rotationY:0, ease:Back.easeOut});  
  }
);

//a nice little intro;)
TweenMax.staggerTo($(".card"), 1, {rotationY:-180, repeat:1, yoyo:true}, 0.1);


// Generic: Get Largest Height of [hidden/visible] Element(s)
// _
function getGreatestHeight(elements) {
  
  // define generic var
  var greatestHeight = 0;
  
  // map argument and get all heights
  var elementHeights = elements.map(function() {
    return $(this).get(0).scrollHeight;
  }).get();
  
  // get the greatest height
  var greatestHeight = Math.max.apply(null, elementHeights);
  return greatestHeight;
}

// Page: Footer Collapse
// _
animate.footerTriggers.on('click', function() {
    
  //local vars
  var top = animate.footer;
  var lists = animate.footerLists;
  var icons = animate.footerIcons;
  var greatestHeight = getGreatestHeight(animate.footerLists);

  //logic + animations
  if(top.hasClass('active')) {
    top.removeClass('active');
    TweenLite.to(lists, 0.18, {"max-height":0,ease:Power1.easeOut})
    TweenLite.to(icons, 0.3, {transform:"rotateX(0deg)"})
  } else {
    top.addClass('active');
    TweenLite.to(lists, 0.18, {"max-height":greatestHeight,ease:Power1.easeIn})
    TweenLite.to(icons, 0.3, {transform:"rotateX(180deg)"})
  }
  
});
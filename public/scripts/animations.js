/*
  animations.js
*/

// Selfie!
(function() {
  console.log('--> animations.js');
})();

// Define DOM Elements
// _
var dom = {};
dom.element = {};
dom.element.footer = $('footer');
dom.element.footer.triggers = $('footer h5');
dom.element.footer.lists = $('footer ul');
dom.element.header = $('header');

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
dom.element.footer.triggers.on('click', function() {
    
  //local vars
  var top = dom.element.footer;
  var lists = dom.element.footer.lists;
  var greatestHeight = getGreatestHeight(dom.element.footer.lists);
  console.log(greatestHeight);
  
  //animations
  var tl = new TimelineLite({paused:true});
  tl.from(lists, 0.2, {height:0, overflow:"hidden"})
  tl.to(lists, 0.2, {height:greatestHeight, overflow:"visible"})
  
  if(top.hasClass('active')) {
    top.removeClass('active');
    tl.reverse();
  } else {
    top.addClass('active');
    tl.play();
  }
  
});
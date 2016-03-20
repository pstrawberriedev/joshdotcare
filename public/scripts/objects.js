/*
  objects.js
*/

// Say Hi outside of doc ready
console.log('--> objects.js');

// On jQuery DOM ready
$(document).ready(function() {
  
  // Say Hi in doc ready
  console.log('--> objects.js (doc ready)');
  
});

// Define some objects!
var objects = {
  constants: {
    cool: "cool",
    wicked: "wicked"
  },
  test: {
    first: "first test object",
    second: "second test object",
    third: "third test object"
  }
}

// Define our DOM elements
var injectFirst = $('[data-objects=first-test]'),
    injectSecond = $('[data-objects=second-test]'),
    injectThird = $('[data-objects=third-test]');

// Inject some objects!
injectFirst.html('<li>' + objects.test.first + '</li>');
injectSecond.html('<li>' + objects.test.second + '</li>');
injectThird.html('<li>' + objects.test.third + '</li>');
  // Let's see when they're being injected
  console.log('----> objects injected');
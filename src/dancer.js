// Creates and returns a new dancer object that can step
var makeDancer = function(top, left, timeBetweenSteps) {
  // Input: top, number, timeBetweenSteps are all numbers
  // Ouput: a new dancer object
  // Constraints: none
  // Edge cases; none
  // Justification: create dancer object
  // Explanation: using the top and left, we can set the position for the dancer to the next position.
  // Visualization:

  // use jQuery to create an HTML <span> tag
  this.$node = $('<span class="dancer a:hover "></span>');
  this.timeBetweenSteps = timeBetweenSteps;

  // now that we have defined the dancer object, we can start setting up important parts of it by calling the methods we wrote
  // this one sets the position to some random default point within the body
  this.setPosition(top, left);
  this.step();
};


makeDancer.prototype.step = function() {
  // the basic dancer doesn't do anything interesting at all on each step,
  // it just schedules the next step
  // pass to setTimeout a new function that, when called, has its this parameter bound to the newly created instance of makeDancer
  setTimeout(
    this.step.bind(this)
    , this.timeBetweenSteps);

};

makeDancer.prototype.setPosition = function(top, left) {
  // Use css top and left properties to position our <span> tag
  // where it belongs on the page. See http://api.jquery.com/css/
  //
  var styleSettings = {
    top: top,
    left: left
  };
  this.$node.css(styleSettings);

};

//lineup function for each dancers/
makeDancer.prototype.horizontalLineUp = function() {
  // console.log("This function ran")
  // console.log(this);
  var styleSettings = {
    top: 670
  };
  this.$node.css(styleSettings);
};

//lineup function for each dancers/
// makeDancer.prototype.verticalLineUp = function() {
//   // console.log("This function ran")
//   // console.log(this);
//   var styleSettings = {
//     left: 0
//   };
//   this.$node.css(styleSettings);
// };

// Questions
// How should we create the functionality for the mouseover so that when we hover over a dancer with the mouse, something happens?
// How to change the movement/ animation for a different dancer? For example, how would we make a specific dancer jump and down?
// How exactly is the dancerMakerFunction currently working for the initial addDancerButton?
// why is sonic not changing its movement?




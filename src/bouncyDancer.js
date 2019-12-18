var makeBouncyDancer = function(top, left, timeBetweenSteps) {
  // var blinkyDancer = makeDancer(top, left, timeBetweenSteps);
  makeDancer.call(this, top, left, timeBetweenSteps);
  this.$node.addClass('sonic');
  // this.$node = $('<span class="sonic"></span>');

  // we plan to overwrite the step function below, but we still want the superclass step behavior to work,
  // so we must keep a copy of the old version of this function

  // var oldStep = this.step;
};

makeBouncyDancer.prototype = Object.create(makeDancer.prototype);
makeBouncyDancer.prototype.constructor = makeBouncyDancer;

makeBouncyDancer.prototype.step = function() {
  // call the old version of step at the beginning of any call to this new version of step
  makeDancer.prototype.step.call(this);
  // toggle() is a jQuery method to show/hide the <span> tag.
  // See http://api.jquery.com/category/effects/ for this and
  // other effects you can use on a jQuery-wrapped html tag.
  // console.log(this.$node);
  // this.$node.animate({top: `+=${Math.random()}*1000px`,left: `+=${Math.random()}*1000px`})
  this.$node.animate({top: `+=100px`,left: `+=80px`,opacity: 0.5});
  this.$node.animate({top: `-=100px`,left: `+=80px`,opacity: 1})
  this.$node.animate({top: `+=100px`,left: `-=80px`,opacity: 0.1})
  this.$node.animate({top: `-=100px`,left: `-=80px`,opacity: 1})
// this.$node.animate({height: `+=50px`,opacity: 0.5});
//   this.$node.animate({height: `-=50px`,opacity: 1})

// How do randomize the direction of the dancer so that

};

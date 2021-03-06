$(document).ready(function() {
  window.dancer = [];

  $('.addDancerButton').on('click', function(event) {
    /* This function sets up the click handlers for the create-dancer
     * buttons on dancefloor.html. You should only need to make one small change to it.
     * As long as the "data-dancer-maker-function-name" attribute of a
     * class="addDancerButton" DOM node matches one of the names of the
     * maker functions available in the global scope, clicking that node
     * will call the function to make the dancer.
     */

    /* dancerMakerFunctionName is a string which must match
     * one of the dancer maker functions available in global scope.
     * A new object of the given type will be created and added
     * to the stage.
     */

    // console.log('this is ', this);
    // console.log('event is ', event.currentTarget);
    var dancerMakerFunctionName = $(this).data('dancer-maker-function-name');

    // get the maker function for the kind of dancer we're supposed to make
    var dancerMakerFunction = window[dancerMakerFunctionName];

    // make a dancer with a random position

    var randomNum = Math.random();
    var dancer = new dancerMakerFunction(
      $("body").height() * Math.random(),
      $("body").width() * Math.random(),
      randomNum * 1000
    );

    // console.log(randomNum);
    $('body').append(dancer.$node);
    window.dancer.push(dancer);
  });

  //  $('.addVerticalineUpButton').on('click', function(event) {
  // // console.log(event)
  //   for (var i = 0; i < window.dancer.length; i++) {

  //     window.dancer[i].verticalLineUp();
  //   }
  // // console.log(window.dancer);
  // });

  $('.addHorizontalLineUpButton').on('click', function(event) {
  // console.log(event)
    for (var i = 0; i < window.dancer.length; i++) {

      window.dancer[i].horizontalLineUp();
    }
  // console.log(window.dancer);
  });
});





// $('.addBouncyButton').on('click', function(event) {
//   var dancerMakerFunctionName = $(this).data('dancer-maker-function-name');

//   // get the maker function for the kind of dancer we're supposed to make
//   var dancerMakerFunction = window[dancerMakerFunctionName];

//   // make a dancer with a random position

//   var dancer = new dancerMakerFunction(
//     $("body").height() * Math.random(),
//     $("body").width() * Math.random(),
//     Math.random() * 1000
//   );
//   $('body').append(dancer.$node);
// });





// $('.addPopButton').on('click', function(event) {
//   var dancerMakerFunctionName = $(this).data('dancer-maker-function-name');

//   // get the maker function for the kind of dancer we're supposed to make
//   var dancerMakerFunction = window[dancerMakerFunctionName];

//   // make a dancer with a random position

//   var dancer = new dancerMakerFunction(
//     $("body").height() * Math.random(),
//     $("body").width() * Math.random(),
//     Math.random() * 50
//   );
//   $('body').append(dancer.$node);
// });



// $('.addDancerButton, .addBouncyButton, addPopButton').on('mouseover', function(event) {
//   var dancerMakerFunctionName = $(this).data('dancer-maker-function-name');

//   // get the maker function for the kind of dancer we're supposed to make
//   var dancerMakerFunction = window[dancerMakerFunctionName];

//   // make a dancer with a random position

//   var dancer = new dancerMakerFunction(
//     $("body").height() * Math.random(),
//     $("body").width() * Math.random(),
//     Math.random() * 1
//   );
//   $('body').append(dancer.$node);
// });
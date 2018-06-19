$(document).ready(function() {
  window.dancers = [];

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
     * A 
     * to the stage.
     */
    var dancerMakerFunctionName = $(this).data('dancer-maker-function-name');

    // get the maker function for the kind of dancer we're supposed to make
    var dancerMakerFunction = window[dancerMakerFunctionName];

    // make a dancer with a random position

    var dancer = new dancerMakerFunction(
      $("body").height() * Math.random(),
      $("body").width() * Math.random(),
      Math.random() * 1000
    );
    $('body').append(dancer.$node);
    window.dancers.push(dancer);
  });

  $('.lineUpButton').on('click', function(event) {
    var midPoint = window.innerWidth / 2;
    var totalHeight = window.innerHeight * 0.8;
    var heightPerDancer = totalHeight/(window.dancers.length - 1);
    for (var x = 0; x < window.dancers.length; x++) {
      var styleSettings = {
        top: heightPerDancer*x,
        left: midPoint
      };
      //window.dancers[x].$node.css(styleSettings);
      window.dancers[x].$node.animate(styleSettings, 3000);
    }
  });

  $('.moveRandomButton').on('click', function(event) {
    for (var x = 0; x < window.dancers.length; x++) {
      var styleSettings = {
        top: $("body").height() * Math.random(),
        left: $("body").width() * Math.random()
      };
      //window.dancers[x].$node.css(styleSettings);
      window.dancers[x].$node.animate(styleSettings, 5000);
    }
  });

  $('.BattleButton').on('click', function(event) { 
    var Radius = 300;
    var dudesToGo = [];  
    for (var x = 0; x < window.dancers.length; x++) {
      
      for (var y = x+1; y < window.dancers.length; y++) {
        var a = parseInt(window.dancers[x].$node.css('top')) - parseInt(window.dancers[y].$node.css('top'));
        var b = parseInt(window.dancers[x].$node.css('left')) - parseInt(window.dancers[y].$node.css('left'));
        var c = Math.sqrt(a**2 + b**2);
        if (c <= Radius) {
          window.dancers[y].$node.hide(); 
          window.dancers.splice(y, 1)
          //dudesToGo.push(window.dancers[y])
        }  
      }
    }
    console.log(window.dancers);
  });

});


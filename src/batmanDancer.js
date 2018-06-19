var makeBatmanDancer = function(top, left, timeBetweenSteps) {
  //var blinkyDancer = makeDancer(top, left, timeBetweenSteps);
  // this = OBject.create(blinkdacer.prototype)
  this.oldStep = makeDancer.prototype.step;
  //console.log(this.oldStep);
  makeDancer.call(this, top, left, timeBetweenSteps);
  //for properties of makedancer


  // we plan to overwrite the step function below, but we still want the superclass step behavior to work,
  // so we must keep a copy of the old version of this function
  
  
};

makeBatmanDancer.prototype = Object.create(makeDancer.prototype)
//to reference methods of makedancer
//makeBlinkyDancer.prototype.constructor = makeBlinkyDancer;

  makeBatmanDancer.prototype.step = function() {
    
    // call the old version of step at the beginning of any call to this new version of step
    this.oldStep();
    //makeDancer.prototype.step();
    // toggle() is a jQuery method to show/hide the <span> tag.
    // See http://api.jquery.com/category/effects/ for this and
    // other effects you can use on a jQuery-wrapped html tag.
    var styleSetting = {
      color: 'blue'
    }
    this.$node.css("border-color", "blue");
  };



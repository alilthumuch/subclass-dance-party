var makeBooDancer = function(top, left, timeBetweenSteps) {
  //var blinkyDancer = makeDancer(top, left, timeBetweenSteps);
  // this = OBject.create(blinkdacer.prototype)
  this.oldStep = makeDancer.prototype.step;
  //console.log(this.oldStep);
  makeDancer.call(this, top, left, timeBetweenSteps);
  //for properties of makedancer
  // this.$node.addClass('roshiDancer');
  //this.$node.attr("src", "roshi.gif");
  this.$node.prepend('<img src="gif/boo.gif" class="booDancer">');

  // we plan to overwrite the step function below, but we still want the superclass step behavior to work,
  // so we must keep a copy of the old version of this function
  
  //this.$node.find('img').on('click', function () {
  this.$node.find('img').on('click', function() {
  //$('.roshi').on('click', function () {
    $(this).width(300);
    $(this).toggleClass('flipped');
    // $(this).animate({ height: '300', width: '450' }, 1500);
  });

};

makeBooDancer.prototype = Object.create(makeDancer.prototype)
//to reference methods of makedancer
//makeBlinkyDancer.prototype.constructor = makeBlinkyDancer;

makeBooDancer.prototype.step = function() {
  
  // call the old version of step at the beginning of any call to this new version of step
  this.oldStep();
  this.$node.toggleClass('flipped');

  //makeDancer.prototype.step();
  // toggle() is a jQuery method to show/hide the <span> tag.
  // See http://api.jquery.com/category/effects/ for this and
  // other effects you can use on a jQuery-wrapped html tag.
  // var yPos = this.$node.css('top');
  // var xPos = this.$node.css('left');
  // var styleSettings = {
  //   top: yPos,
  //   left: xPos + 100
  // };
  // this.$node.css(styleSettings);
 
};



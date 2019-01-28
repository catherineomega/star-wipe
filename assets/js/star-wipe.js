$(document).ready(function() {
  buildDoubles();
});

$('h1').click(function() {
  switchThemes();
});

function switchThemes() {

}

function buildDoubles() {

}


//store elements in variables
var mask = document.querySelector('svg'),
  paragraph = document.querySelector('.aligner'),
  btn = document.querySelector('h1');

//add event listener to animate button to add the relevant CSS classes to the appropriate elements to animate them
btn.addEventListener('click', function(e) {
  e.preventDefault();
  console.log("clicked");
  mask.classList.add('animate');
  paragraph.classList.add('visible');
}, false);

//remove animation classes
function removeAnimation(elem, animClass) {
  elem.classList.remove(animClass);
}
mask.addEventListener('animationend', function() {
  removeAnimation(this, 'animate');
}, false);

//remove class that transitions the paragraph after transition ends
paragraph.addEventListener('transitionend', function() {
  removeAnimation(this, 'visible');
}, false);

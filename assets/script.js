function onFullCharge() {
  window.addEventListener('scroll', function () {
    const body = document.getElementById('body');
    if(!elementTouchTop(body).top) {
      headerblur();
    }
  });
}
function headerblur() {
  const target = document.querySelector('header');
  var scrolled = window.pageYOffset;
  var rate = scrolled * 0.05;

  target.style.backgroundPosition = "center -" + rate + "px";
  target.style.filter = "blur(" + rate + "px)";
}
function elementTouchTop(element) { //returns true or false when the element top line or the element bottom line touch the top viewport
  var box = element.getBoundingClientRect();
  var top = false; 
  var bottom = false;

  if(box.top <= 0) {
    top = true;
  }
  if(box.bottom <= 0) {
    bottom = true;
  }

  return{
    top,
    bottom
  }
}
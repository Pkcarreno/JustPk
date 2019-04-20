function onFullCharge() {
  window.onscroll = function() {
    headerblur();
  };
}
function headerblur() {
  var height = window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight;
  var scrollTop = document.documentElement.scrollTop || document.body;
  var pixels = scrollTop / 70;
  var header = document.getElementById("header");
  
  if (scrollTop < height) {
    header.style.filter = "blur(" + pixels + "px)";
    header.style.WebkitFilter = "blur(" + pixels + "px)";
    header.style.backgroundPosition = "center -" + pixels * 15 + "px";
  }
}
function throttle(fn, wait) {
  var time = Date.now();
  return function () {
    if ((time + wait - Date.now()) < 0) {
      fn();
      time = Date.now();
    }
  }
}
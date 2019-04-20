function onFullCharge() {
  window.addEventListener('scroll', function (e) {
    headerblur()
  });
}

function headerblur() {
    const target = document.querySelector('header');
    var scrolled = window.pageYOffset;
    var rate = scrolled * 0.05;

    console.log(scrolled);

    target.style.backgroundPosition = "center -" + rate + "px";
    target.style.filter = "blur(" + rate + "px)";
}

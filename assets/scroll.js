function onFullCharge() {
  const target = document.querySelector("header");
  const body = document.getElementById("body1");
  const title = document.getElementById("title");
  window.addEventListener("scroll", function () {
    let rate = (window.pageYOffset || document.documentElement.scrollTop)* 0.05 ;
    if(!elementTouchTop(body).top) {
      parallaxBlur(target,rate);
      if (!abElementTouchTop(title,body).downTop) {
        titleDisplacement(rate);
      }
    }
  });
}
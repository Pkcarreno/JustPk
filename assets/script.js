function onFullCharge() {
  window.addEventListener("scroll", function () {
    const body = document.querySelector("#body");
    const title = document.querySelector("#title");
    const downArrow = document.querySelector("#downArrow");
    let rate = window.pageYOffset * 0.05;
    if(!elementTouchTop(body).top) {
      headerblur(rate);
      if (!abElementTouchTop(title, downArrow).downTop || !elementTouchTop(title).top) {
        titleDisplacement(rate);
      }
      console.log(abElementTouchTop(title, downArrow));
      console.log(title.getBoundingClientRect().bottom,"||", downArrow.getBoundingClientRect().top)
    }
  });
}
function headerblur(rate) {
  const target = document.querySelector("header");
  target.style.backgroundPosition = "center -" + rate + "px";
  target.style.filter = "blur(" + rate + "px)";
}
function titleDisplacement(rate) {
  const target = document.querySelector("#title");
  target.style.transform = "translate3d(0px," + rate * 15 + "px, 0px)";
}
function elementTouchTop(element) { //returns true or false when the element top line or the element bottom line touch the top viewport
  let box = element.getBoundingClientRect();
  let top = false; 
  let bottom = false;
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
function abElementTouchTop(elementA, elementB) { //returns true or false if element a and b touch the top and bottom border in each combination each other
  let boxA = elementA.getBoundingClientRect();
  let boxB = elementB.getBoundingClientRect();
  let upTop = false;
  let downTop = false;
  let upBottom = false;
  let downBottom = false;

  if (boxA.top >= boxB.top) { //element a top line and element b top line
    upTop = true;
  }
  if (boxA.bottom >= boxB.top) { //element a bottom line and element b top line
    downTop = true;
  }
  if (boxA.top >= boxB.bottom) { //element a top line and element b bottom line
    upBottom = true;
  }
  if (boxA.bottom >= boxB.bottom) { //element a bottom line and element b bottom line
    downBottom = true;
  }

  return {
    upTop,
    downTop,
    upBottom,
    downBottom
  }
}

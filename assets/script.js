function onFullCharge() {
  window.addEventListener("scroll", function () {
    const body = document.querySelector("#body");
    const title = document.querySelector("#title");
    const downArrow = document.querySelector("#downArrow");
    let rate = window.pageYOffset * 0.05;
    if(!elementTouchTop(body).top) {
      headerblur(rate);
      if (!abElementTouchTop(title, downArrow).downTop) {
        titleDisplacement(rate);
      }
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
  target.style.transform = "translate(0px," + rate * 16 + "px)";
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
function abElementTouchTop(elementA, elementB) { //returns true or false if element a and b touch the top and bottom border in each combination each other, pointing to element A
  let boxA = elementA.getBoundingClientRect();
  let boxB = elementB.getBoundingClientRect();
  let upTop = false;
  let downTop = false;
  let upBottom = false;
  let downBottom = false;

  if ((boxA.top >= boxB.top) && !(boxA.top >= 0)) { //element a top line and element b top line
    upTop = true;
  }
  if ((boxA.bottom >= boxB.top) && !(boxA.top >= 0)) { //element a bottom line and element b top line
    downTop = true;
  }
  if (boxA.top >= boxB.bottom && !(boxA.top >= 0)) { //element a top line and element b bottom line
    upBottom = true;
  }
  if (boxA.bottom >= boxB.bottom && !(boxA.top >= 0)) { //element a bottom line and element b bottom line
    downBottom = true;
  }

  return {
    upTop,
    downTop,
    upBottom,
    downBottom
  }
}

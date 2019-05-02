/* prefetch.js */ 
function navAndVersionCheck() {
  let word = arguments[0].split(' ');
  let navVersionString = navigator.appVersion.split(' ');
  let bol = false;
  for (let i = 0; i < (word.length - 1); i += 2) {
    let version = 0;
    for (let b = 0; b < navVersionString.length; b++) {
      if (word[i] == navVersionString[b].substring(word[i].length, -1)){
        version = navVersionString[b].substring(word[i].length + 1);
      }
    }
    if ((navigator.userAgent.indexOf(word[i]) > -1) && (word[i + 1] <= version)) {
      if (arguments[1] != undefined) {
        arguments[1]();
      }
      bol = true;
      return bol;
    }
  }
}
function setImage() {
  document.querySelector("header").style.backgroundImage = "url('./assets/pictures/headerBack-4.webp')";
  document.getElementById("headerMe").style.backgroundImage = "url('./assets/pictures/headerMe-4.webp')";
}
/* scroll.js */ 
function parallaxBlur(element, rate) { //does a smooth background displacement down and add blur effect
  element.style.backgroundPosition = "center -" + rate + "px";
  element.style.filter = "blur(" + rate + "px)";
}
function titleDisplacement(rate) {
  const target = document.querySelector("#title");
  target.style.transform = "translate(0px," + rate / 0.1 + "px)";
}
function showElement(element) {
  element.style.display = "none";
}
function hiddeElement(element) {
  element.style.display = "none";
}
function elementTouchTop(element) { //returns true or false when the element top line or the element bottom line touch the top viewport
  let box = element.getBoundingClientRect();
  let top = false;
  let bottom = false;
  if (box.top <= 0) {
    top = true;
  }
  if (box.bottom >= 0) {
    bottom = true;
  }

  return {
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
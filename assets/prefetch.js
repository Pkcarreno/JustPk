function setIni() {
  navAndVersionCheck("Chrome 32 Firefox 65 Opera 19 Edge 18",setImage);
}
function navAndVersionCheck() {
  let word = arguments[0].split(' ');
  let navVersionString = navigator.appVersion.split(' ');
  let bol = false;
  for (let i = 0; i < (word.length - 1); i += 2) {
    let version = 0;
    for (let b = 0; b < navVersionString.length; b++) {
      if (word[i] == navVersionString[b].substring(word[i].length, -1)) {
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

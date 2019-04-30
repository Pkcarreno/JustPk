function setIni() {
  setImage("Chrome 32 Firefox 65 Opera 19 Edge 18");
}
function setImage(text) {
  const element_1 = document.querySelector("header");
  const element_2 = document.getElementById("headerMe");
  let word = text.split(' ');
  let navVersionString = navigator.appVersion.split(' ');
  console.log("hola");
  for (let i = 0; i < (word.length - 1); i += 2) {
    let version = 0;
    for (let b = 0; b < navVersionString.length; b++) {
      if (word[i] == navVersionString[b].substring(word[i].length, -1))
        version = navVersionString[b].substring(word[i].length + 1);
    }
    if ((navigator.userAgent.indexOf(word[i]) > -1) && (word[i + 1] <= version)) {
      element_1.style.backgroundImage = "url('./assets/pictures/headerBack-4.webp')";
      element_2.style.backgroundImage = "url('./assets/pictures/headerMe-4.webp')";
      return true;
    }
  }
}
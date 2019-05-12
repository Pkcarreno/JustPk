document.addEventListener("DOMContentLoaded", function (event) {
  console.log("hola1");
  if (window.matchMedia('(pointer:coarse)').matches) {
    MobilVer();
    console.log("hola2");
  }
  else {
    DeskVer();
  }
});
function MobilVer() {
  // make a stylesheet link
  var myCSS = document.createElement("NewStyle.css");
  myCSS.rel = "stylesheet";
  myCSS.href = "/assets/mobile-style.css";
  // insert it at the end of the head in a legacy-friendly manner
  document.head.insertBefore(myCSS, document.head.childNodes[document.head.childNodes.length - 1].nextSibling);
}
function DeskVer() {
  // make a stylesheet link
  var myCSS = document.createElement("NewStyle.css");
  myCSS.rel = "stylesheet";
  myCSS.href = "/assets/desktop-styles.css";
  // insert it at the end of the head in a legacy-friendly manner
  document.head.insertBefore(myCSS, document.head.childNodes[document.head.childNodes.length - 1].nextSibling);
}
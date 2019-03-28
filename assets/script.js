$(document).ready(function(){

  var height = window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight;

  ajustesIniciales();

  function ajustesIniciales(){
    document.getElementById("headTitle").style.height = height - 20  + "px";
  }

  
  
  document.onscroll = function(){
    var scrollTop = $(this).scrollTop();
    var pixels = scrollTop / 70;
    var header = document.getElementById("header");
  
    if(scrollTop < height){
      header.style.filter = "blur(" + pixels + "px)";
      header.style.WebkitFilter = "blur(" + pixels + "px)";
      header.style.backgroundPosition = "center -" + pixels * 10 + "px";
    }
  };
});
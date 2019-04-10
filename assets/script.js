function onFullCharge(){

  var height = window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight;
  
  initialSettings();

  function initialSettings(){
    //a la espera de algun ajuste inicial
    document.getElementById("headerTitle").style.height = height + "vh";
  }

  document.onscroll = function(){
    var scrollTop = document.documentElement.scrollTop || document.body;
    var pixels = scrollTop / 70;
    var header = document.getElementById("header");

    if(scrollTop < height){
      header.style.filter = "blur(" + pixels + "px)";
      header.style.WebkitFilter = "blur(" + pixels + "px)";
      header.style.backgroundPosition = "center -" + pixels * 10 + "px";
    }
  };
}
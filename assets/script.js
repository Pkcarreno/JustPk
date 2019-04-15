function onFullCharge(){

  var height = window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight;
  var titleScrollTopBuffer;
    var titlePixels;
 /* initialSettings();

  function initialSettings(){
    //a la espera de algun ajuste inicial
    document.getElementById("headerTitle").style.height = height + "vh";
  }*/

  document.onscroll = function(){
    var scrollTop = document.documentElement.scrollTop || document.body;
    var scrollDown = document.documentElement.scrollDown ;
    var pixels = scrollTop / 70;
    var header = document.getElementById("header");

    var title = document.getElementById("title");
    var titleleft = document.getElementById("leftTitle");
    var titleScrollTop = titleleft.scrollTop;
    

    if(scrollTop < height){
      header.style.filter = "blur(" + pixels + "px)";
      header.style.WebkitFilter = "blur(" + pixels + "px)";
      header.style.backgroundPosition = "center -" + pixels * 15 + "px";
      console.log(titlePixels);

      if(scrollTop > scrollDown){
        titlePixels += 1;

      }else{
        titlePixels -= 1;

      }
      title.style.marginTop = titlePixels + "%";
      
    }
  };
}
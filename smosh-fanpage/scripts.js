document.addEventListener("DOMContentLoaded", function(){
        //respond to clicks on the burger icon
        document.querySelector("#navBurger").addEventListener("click", function(e){
                document.querySelector("nav").classList.toggle("clicked"); 
        });


});
/*Doesn't work rn*/
/*document.addEventListener("DOMContentLoaded", function(){
  document.querySelector("#navBurger").addEventListener("hover", function(e){
      document.querySelector("nav").classList.toggle("hovered"); 
    }); 
}); */
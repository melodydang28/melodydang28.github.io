/*Navigation Burger click event*/

document.addEventListener("DOMContentLoaded", function(){
        //respond to clicks on the burger icon
        document.querySelector("#navBurger").addEventListener("click", function(e){
                document.querySelector("nav").classList.toggle("clicked"); 
        });
});
/*let header = document.querySelector("#rhodInformationNames"); 
header.addEventListener(click, function(e){
      header.classList.toggle("gotClicked"); 
});/*"darkMode"); */

document.addEventListener("DOMContentLoaded", function(){

           let darkModeButton = document.querySelector("#toggleDarkMode"); 

             darkModeButton.addEventListener("click", function(e){
                                             
                   document.body.classList.toggle("darkMode"); 

      }); 
}); 
// AOSINIT--------------------------------------------------

AOS.init();


// INTROJSINIT--------------------------------------------

// introJs().start();
// TERMINALSINIT----------------------------------------------
// var termynal = new Termynal('#termynal', { typeDelay: 10 })



//QUERYSELECTORS---------------------------------------------
    
    

//EVENTLISTENERS---------------------------------------------
  

//FUNCTIONS---------------------------------------------


//AJUSTA LA POSICION DEL NAVBAR FIXED-TOP
$(document).ready(function(){
  $(document.body).css('padding-top', $('#topnavbar').height() + 10);
  $(window).resize(function(){
      $(document.body).css('padding-top', $('#topnavbar').height() + 10);
  });
});



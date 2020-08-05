// AOSINIT--------------------------------------------------

setTimeout(function() { aosInit(); }, 1000);

// INTROJSINIT--------------------------------------------

// introJs().start();
// TERMINALSINIT----------------------------------------------
// var termynal = new Termynal('#termynal', { typeDelay: 10 })



//QUERYSELECTORS---------------------------------------------
    
    

//EVENTLISTENERS---------------------------------------------
  

//FUNCTIONS---------------------------------------------
   
function aosInit()
{
  AOS.init();
}





//codigo que corrige el navbar de hacer overflow
    $(document).ready(function(){
        $(document.body).css('padding-top', $('#topnavbar').height() + 10);
        $(window).resize(function(){
            $(document.body).css('padding-top', $('#topnavbar').height() + 10);
        });
    });

// AOSINIT--------------------------------------------------

setTimeout(function() { aosInit(); }, 1000);



//inicia las animaciones de scroll 
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




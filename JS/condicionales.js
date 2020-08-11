// AOSINIT--------------------------------------------------

AOS.init();

// CLIPBOARDJSINIT----------------------------------------------
//Inicializamos clipboardjs para el ejemplo #copyejemplo_1 es un <a></a>
var copyclipEjemplo1 = new ClipboardJS('#copyejemplo_1');



// SMOOTHSCROLLING--------------------------------------------------
var scroll = new SmoothScroll('a[href*="#"]', 
{
  offset: 100
})




//AJUSTA LA POSICION DEL NAVBAR FIXED-TOP-----------------------
$(document).ready(function(){
  $(document.body).css('padding-top', $('#topnavbar').height() + 10);
  $(window).resize(function(){
      $(document.body).css('padding-top', $('#topnavbar').height() + 10);
  });
});



// boton scroll up funcionalidad
$(document).ready(function(){
	$(window).scroll(function () {
			if ($(this).scrollTop() > 50) {
				$('#back-to-top').fadeIn();
			} else {
				$('#back-to-top').fadeOut();
			}
		});
		// scroll body to 0px on click
		$('#back-to-top').click(function () {
			$('body,html').animate({
				scrollTop: 0
			}, 400);
			return false;
		});
});
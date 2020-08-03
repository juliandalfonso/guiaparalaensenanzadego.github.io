// AOSINIT--------------------------------------------------
AOS.init();

// CLIPBOARDJSINIT----------------------------------------------

var copyclip1 = new ClipboardJS('#copyejercicio1');

// SMOOTHSCROLLING--------------------------------------------------
var scroll = new SmoothScroll('a[href*="#"]', 
{
  offset: 100
})


// INTROJSINIT--------------------------------------------

// introJs().start();

// TERMINALSINIT----------------------------------------------

//inicializamos las terminales "incluyen typedjs"
// var termynal = new Termynal('#termynal', { startDelay: 600 });
// var termynal2 = new Termynal('#termynal2', { startDelay: 600 });



//QUERYSELECTORS---------------------------------------------
const runejercicio1 = document.querySelector('#runejercicio1');
const debugejercicio1 = document.querySelector('#debugejercicio1');
const copyejercicio1 = document.querySelector('#copyejercicio1');



//EVENTLISTENERS---------------------------------------------
runejercicio1.addEventListener('click', runnerEjercicio1);
runejercicio1.addEventListener('click', prev);
debugejercicio1.addEventListener('click', debugerEjercicio1);
copyejercicio1.addEventListener('click', prev);



//FUNCTIONS---------------------------------------------

//crea un nuevo elemento en la terminal del ejercicio1 y y lo agrega
function runnerEjercicio1(e) {
  
  e.preventDefault();
  console.log('entramos?');

  e.target.removeEventListener(e.type, arguments.callee);//borramos el event listener para que no se vuelva a ejecutar esta funcion
 
  document.getElementById("rundivejercicio1").insertAdjacentHTML("afterend",
    "<p class='separator'></p><span data-ty='input' data-ty-prompt=''><p id='prompt'>hello world!</p></span>");
  document.querySelector('#prompt').className = 'animate__animated animate__bounce text-success ml-4';
}


//Ejecuta IntroJS en el ejercicio1 
function debugerEjercicio1(e) {
  e.preventDefault();
  introJs('#ejercicio1').start();
}

//funcion que elimina todas las funciones por defecto 
function prev(e) {
  e.preventDefault();
}



// funcion que muestra mensaje "copiado!" al dar click en el boton copy
tippy('#copyejercicio1', {
  content: 'copiado!',
  trigger: 'click'
});



// funcion que borra la seleccion una vez copiada
copyclip1.on('success', function (e) {
  e.clearSelection();
});




//AJUSTA LA POSICION DEL NAVBAR FIXED-TOP
$(document).ready(function(){
  $(document.body).css('padding-top', $('#topnavbar').height() + 10);
  $(window).resize(function(){
      $(document.body).css('padding-top', $('#topnavbar').height() + 10);
  });
});



// AOSINIT--------------------------------------------------
AOS.init();

// CLIPBOARDJSINIT----------------------------------------------

//inicializamos clipboardjs para el ejemplo #copyejemplo_1 es un <a></a>
var copyclipEjemplo1 = new ClipboardJS('#copyejemplo_1');

// SMOOTHSCROLLING--------------------------------------------------
var scroll = new SmoothScroll('a[href*="#"]', 
{
  offset: 100
})

//SORTABLEJS INIT------------------------------------------------


Sortable.create(simpleList, { /* options */ });



// INTROJSINIT--------------------------------------------

// introJs().start();

// TERMINALSINIT----------------------------------------------

//inicializamos las terminales "incluyen typedjs"
//  var termynalEjemplo1 = new Termynal('#termynalEjemplo1', { startDelay: 600 });
// var termynal2 = new Termynal('#termynal2', { startDelay: 600 });



//QUERYSELECTORS-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------



//------------------------------ query selectors del ejemplo 1----------------------------------
// const runejemplo_1 = document.querySelector('#runejemplo_1');
// const debugejemplo_1 = document.querySelector('#debugejemplo_1');
// const copyejemplo_1 = document.querySelector('#copyejemplo_1');

// // Selecciona todos los botones que haya que quitarle el default--------------------------------------
// const previeneDefault = document.getElementsByClassName('prev');







//------------------query selectors de los verificadores de ejercicios---------------------------









//EVENTLISTENERS----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------



// event listeners ejemplo 1-------------------------------------------------------------------
// runejemplo_1.addEventListener('click', runnerejemplo_1);

// debugejemplo_1.addEventListener('click', debugerejemplo_1);

// //previene la funcion por defecto de todos los nodos seleccionados con la clase prev
// for (var i=0;i<previeneDefault.length; i++) {
//   previeneDefault[i].addEventListener('click', prev);
// }




// event listeners ejercicio 1----------------------------------------------------------------------




// //FUNCTIONS---------------------------------------------

// //crea un nuevo elemento en la terminal del ejemplo_1 y y lo agrega
// function runnerejemplo_1(e) {
  
//   e.preventDefault();

//   e.target.removeEventListener(e.type, arguments.callee);//borramos el event listener para que no se vuelva a ejecutar esta funcion
 
//   document.getElementById("rundivejemplo_1").insertAdjacentHTML("afterend",
//     "<p class='separator'></p><span data-ty='input' data-ty-prompt=''><p id='prompt'>hello world!</p></span>");
//   document.querySelector('#prompt').className = 'animate__animated animate__bounce text-success ml-4';
// }


// //Ejecuta IntroJS en el ejemplo_1 
// function debugerejemplo_1(e) {
//   e.preventDefault();
//   introJs().start();
// }

// //funcion que elimina todas las funciones por defecto 
// function prev(e) {
//   e.preventDefault();
// }


// // funcion que muestra mensaje "copiado!" al dar click en el boton copy
// tippy('#copyejemplo_1', {
//   content: 'copiado!',
//   trigger: 'click'
// });



// // funcion que borra la seleccion una vez copiada
// copyclipEjemplo1.on('success', function (e) {
//   e.clearSelection();
// });




//AJUSTA LA POSICION DEL NAVBAR FIXED-TOP
$(document).ready(function(){
  $(document.body).css('padding-top', $('#topnavbar').height() + 10);
  $(window).resize(function(){
      $(document.body).css('padding-top', $('#topnavbar').height() + 10);
  });
});



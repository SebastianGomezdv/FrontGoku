import { consumirAPI } from "/consumoServicio.js";
//Referencias al formulario

let nombres = document.getElementById("nombres");
let cantidadVida = document.getElementById("cantidad");
let poderAtaque = document.getElementById("ataque");
let poderDefensa = document.getElementById("defensa");
let fotografia = document.getElementById("foto");
let fechaCreacion = document.getElementById("fecha");
let botonFormulario = document.getElementById("boton");

// detecto el evento de hacerle clic al boton

botonFormulario.addEventListener("click", function (evento) {
  evento.preventDefault();
  /*Swal.fire({
    title: "Buen trabajo!",
    text: "Has hecho click!",
    icon: "success",
    });*/
  /*  Swal.fire({
    icon: "error",
    title: "Oops...",
    text: "Algo ha sucedido!",
    footer: '<a href="#">Porque tengo este problema?</a>',
    });*/

  let datosQueVoyAEnviarALBack = {
    "nombre": nombres.value,
    "cantidadVida": cantidadVida.value,
    "cantidadAtaque": poderAtaque.value,
    "cantidadDefensa": poderDefensa.value,
    "fotografia": fotografia.value,
    "fechaCreacion": fechaCreacion.value,
  }
  let datosListosParaViajar = JSON.stringify(datosQueVoyAEnviarALBack);


  // LLAMO AL CONSUMO  
  consumirAPI(datosListosParaViajar)
    .then(function (respuesta) {
      Swal.fire({
        title: "Buen trabajo!",
        text: "Has Guardado Correctamente El Personaje!",
        icon: "success",
      });
    })
    .catch(function (error) {
      Swal.fire({
        title: "Error",
        text: "Ocurrió un problema al guardar el personaje: " + error.message,
        icon: "error",
      });
    });

});


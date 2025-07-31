import { consumirAPI, consumirAPIGet } from "/consumoServicio.js";

//Referencias al formulario

let inputs = document.querySelectorAll(".campo")
let botonFormulario = document.getElementById("boton")

// detecto el evento de hacerle clic al boton

botonFormulario.addEventListener("click", function (evento) {
  evento.preventDefault();
  let datosQueVoyAEnviarALBack = {
  }
  inputs.forEach(input => {
    if (input.type === "radio") {
      if (input.checked) {
        datosQueVoyAEnviarALBack[input.name] = input.value
      }
    } else {
      datosQueVoyAEnviarALBack[input.name] = input.value
    }
  })
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


consumirAPIGet()
.then(personaje => {
  personaje.forEach(e => {
  console.log(e);
     
  });
});

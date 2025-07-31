export async function consumirAPI(datosDelFormulario){
  //1 Para que backend voy
  let url = "http://localhost:8080/personajes";

  //2 Configuración de la petición
  let peticion = {
    method: "POST",
    headers: {"Content-Type":"application/json"},
    body: datosDelFormulario,
  };

  //3 Ir al back
  let respuesta = await fetch(url,peticion);
  return await respuesta.json();
}

export async function consumirAPIGet() {
  // 1 URL del backend
  let url = "http://localhost:8080/personajes";

  // 2 Configuración de la petición
  let peticion = {
    method: "GET",
    headers: {
      "Content-Type": "application/json"
    }
    // No se envía body en GET
  };

  // 3 Ir al backend
  let respuesta = await fetch(url, peticion);
  return await respuesta.json();
}

export async function mostrar() {
  const personajes = []
  personajes.push(await consumirAPIGet())
  return personajes
}

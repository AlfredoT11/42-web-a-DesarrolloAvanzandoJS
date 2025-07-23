let BASE_URL = "http://localhost:3000"

// Async-await
async function obtenerPlatillos(){
    let respuesta = await fetch(`${BASE_URL}/platillos`); // await pausa la ejecución del resto del código hasta que la promesa termine.
    let respuestaJson = await respuesta.json();
    console.log(respuestaJson);
}

fetch(`${BASE_URL}/platillos`)
.then((respuesta) => {
    return respuesta.json();
}).then((json) => {
    console.log(json);
}).catch((error) => {
    console.log(error);
});

obtenerPlatillos();

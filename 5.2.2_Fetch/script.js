/*
    JSON: JavaScript Object Notation

    Objecto literal: Un conjunto de datos que se almacenan dentro de una variable. Cada dato tiene asignado una llave.
*/

let gato = {
    nombre: "Bowie",
    edad: 2,
    estaEsterilizado: true,
    informacionContacto: {
        nombre: "Tona",
        telefono: 5529891111
    },
    hermanosGatos: ["Tigrillo", "Zoro"]
}


console.log(gato.nombre); // Bowie
console.log(gato.informacionContacto.telefono); // 5529891111
console.log(gato.hermanosGatos[1]); // Zoro

gato.nombre = "Panfleto"; // Modificar el valor de una llave dentro de un objeto literal.

// fetch = Es una función que lanza una petición a una URL.
// fetch regresa una promesa
let promesaRespuesta = fetch("https://swapi.info/api/people/1"); 

// Una promesa se cumple
promesaRespuesta.then((valorRespuesta) => {
    console.log(`Se recibió la respuesta del servidor.`);
    console.log(valorRespuesta);

    // El método json() convierte el body de la respuesta a un objeto literal.
    // El método json() es una promesa.
    let respuestaJsonPromesa = valorRespuesta.json();
    
    return respuestaJsonPromesa;
})
.then((respuestaBodyJson) => {
    console.log(respuestaBodyJson);
})
// Una promesa se rechazada
.catch((error) => {
    console.log(`Ocurrió un error al realizar la petición.`);
});


console.log(respuesta);


// status code
/*
    100 - 199 -> La petición se sigue procesado.
    200 - 299 -> La petición salió bien.
    300 - 399 -> Redirecciones o que un recurso ya no está donde lo estamos buscando.
    400 - 499 -> Son errores que hace el cliente al hacer una petición.
    500 - 599 -> Ocurrió un error en el servidor.
*/
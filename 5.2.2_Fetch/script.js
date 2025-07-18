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
// Por defecto fetch utiliza el método GET.
console.log(`1. Se lanza la petición.`)
let promesaRespuesta = fetch("https://swapi.info/api/people/1"); 

// Una promesa se cumple
promesaRespuesta.then((valorRespuesta) => {
    console.log(`2. Se recibió la respuesta del servidor.`);
    console.log(valorRespuesta);

    // El método json() convierte el body de la respuesta a un objeto literal.
    // El método json() es una promesa.
    console.log(`3. Se convierte el body de la respuesta a un objeto literal`)
    let respuestaJsonPromesa = valorRespuesta.json();
    
    return respuestaJsonPromesa;
})
.then((respuestaBodyJson) => {
    console.log(`4. Obtenemos el objeto literal del body de la respuesta.`)
    // El JSON del body de la respuesta(response) de la petición(request).
    console.log(respuestaBodyJson);

    let elementoNombre = document.getElementById("nombrePersonaje");
    elementoNombre.innerText = `Nombre personaje:  ${respuestaBodyJson.name.split(' ')[1]}`;

    document.getElementById("alturaPersonaje").innerText = `Altura: ${respuestaBodyJson.height / 100}m`;
    document.getElementById("fechaNacimiento").innerText = `Año de nacimiento: ${respuestaBodyJson.birth_year}`;

})
// Una promesa se rechazada
.catch((error) => {
    console.log(`Ocurrió un error al realizar la petición.`);
});


//console.log(respuesta);


// status code
/*
    100 - 199 -> La petición se sigue procesado.
    200 - 299 -> La petición salió bien.
    300 - 399 -> Redirecciones o que un recurso ya no está donde lo estamos buscando.
    400 - 499 -> Son errores que hace el cliente al hacer una petición.
    500 - 599 -> Ocurrió un error en el servidor.
*/

/*
    Ejercicio
    1. Crear una aplicación web que permita hacer una petición a una API que obtenga información de un personaje.
    2. Mostrar esa información en la aplicación web (NO EN LA CONSOLA).
    3. La petición se debe lanzar a través de presionar un botón.
*/
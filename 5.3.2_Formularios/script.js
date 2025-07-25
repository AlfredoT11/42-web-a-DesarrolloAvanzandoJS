// DOM -> Document Object Model
/*
    Una representación de un página HTML con la que JS puede interactuar.
*/

/*
    document.getElementById();
    document.getElementsByClassName();
    document.getElementsByTagName(); tag = etiqueta
*/

// Pasos para agregar un evento a un elemento
// 1. Obtener el elemento al que le quiero agregar el evento.
let btnAgregarPlatillo = document.getElementById("btnAgregarPlatillo");

// 2. Utilizar la función addEventListener sobre el elemento al que le quiero agregar el evento.
// 3. Como primer parámetro elegir el evento a escuchar.
// 4. Escribir la función a ejecutar cuando el evento sea lanzado.
//      NOTA: La función a ejecutar SIEMPRE debe recibir como parámetro event (o e).
btnAgregarPlatillo.addEventListener("click", async (event) => {

    let inputNombrePlatillo = document.getElementById("inputNombrePlatillo");
    let inputPrecioPlatillo = document.getElementById("inputPrecioPlatillo");
    let inputEstacionPlatillo = document.getElementById("inputEstacionPlatillo");

    console.log(inputNombrePlatillo.value);
    console.log(inputPrecioPlatillo.value);
    console.log(inputEstacionPlatillo.value);

    /*
        Estamos trabajando con un modelo conocido como REST API.
        Las características de este modelo son:
        1. Trabaja con peticiones sin estado. (stateless)
        2. Trabaja con archivos de tipo JSON o XML.
        3. Trabaja con los siguientes verbos HTTP:
            - POST      - Agregar/Crear
            - GET       - Obtener 
            - PUT       - Editar/Modificar/Sustituir
            - DELETE    - Borrar
    */

    /*
         Estructura de una Petición (Request) y Respuesta (Response)
         --------------
             HEADERS
         --------------
             BODY        -> En REST el Body tiene un JSON o un XML.
         --------------
 
         JSON -> Un archivo de texto muy parecido a un Objecto Literal. 
         Además este archivo es una cadena.
    */

    let informacionPlatillo = {
        nombre: inputNombrePlatillo.value,
        precio: inputPrecioPlatillo.value,
        estacionDelPlatillo: inputEstacionPlatillo.value
    };

    /*
        Formas para manejar promesas:
        1. Async-await
            - Convertir código asíncrono a código síncrono.
        2. Then-Catch
            - Ejecutar código de manera asíncrona.
    */

    const BASE_URL = "https://backend-restaurante-ii.onrender.com";

    // La función fetch nos permite mandar una petición a una API.
    let response = await fetch(`${BASE_URL}/platillos`, {
        method: 'POST',
        body: JSON.stringify(informacionPlatillo),
        headers: {
            'Content-Type': 'application/json'
        }
    });

    console.log(response);

    consultarInformacion();

});

async function consultarInformacion(){

    const BASE_URL = "https://backend-restaurante-ii.onrender.com";

    let response = await fetch(`${BASE_URL}/platillos`, {
        method: "GET"
    });
    console.log(response);

    // Convertir el body de una respuesta a un objeto literal.
    // La función json() es una función asíncrona, por lo tanto es una promesa.
    // Es necesario convertir el body de una respuesta a un json, ya que si no lo hacemos
    // el body está en formato ReadableStream (o sea son 0's y 1's).
    let responseBodyJson = await response.json();
    console.log(responseBodyJson);

    document.getElementById("primerPlatillo").innerText = responseBodyJson[0].nombre;
}

// ¿De dónde obtenemos la información a guardar?
/*

*/

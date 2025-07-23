let BASE_URL = "http://localhost:3000"

// Async-await
async function obtenerPlatillos(){
    let respuesta = await fetch(`${BASE_URL}/platillos`, {
    }); // await pausa la ejecución del resto del código hasta que la promesa termine.
    let respuestaJson = await respuesta.json();
    console.log(respuestaJson);

    document.getElementById("platillo").innerText = respuestaJson[9].nombre;
    document.getElementById("imagenPlatillo").setAttribute("src", respuestaJson[9].imagen);
}

async function agregarPlatillo(){

    let nuevoPlatillo = {
        id: 100,
        nombre: 'Albóndigas',
        precio: 100,
        imagen: "https://media.istockphoto.com/id/626752258/photo/albondigas-meatballs-with-tomato-sauce-on-a-plate-close-up.jpg"
    }

    let respuesta = await fetch(`${BASE_URL}/platillos`, {
        method: 'POST',
        body: JSON.stringify(nuevoPlatillo)
    });
    let json = await respuesta.json();
    console.log(json);
}

async function eliminarPlatillo(){
    let respuesta = await fetch(`${BASE_URL}/platillos/3`, { method: 'DELETE'} );
    let json = await respuesta.json();
    console.log(json);
}

/*
fetch(`${BASE_URL}/platillos`)
.then((respuesta) => {
    return respuesta.json();
}).then((json) => {
    console.log(json);
}).catch((error) => {
    console.log(error);
});
*/

obtenerPlatillos();
//agregarPlatillo();
//obtenerPlatillos();

document.getElementById("btnAgregarPlatillo").addEventListener('click', (e) => {
    console.log("Agregar platillo");
    agregarPlatillo();
});


document.getElementById("btnEliminarPlatillo").addEventListener('click', (e) => {
    console.log("Eliminar platillo");
    eliminarPlatillo();
    obtenerPlatillos();
});

/*
    Ejercio:
    Mostrar la información de todos los platillos en una aplicación web.
    Agregarle a cada platillo un botón que diga "Agregar a la orden".
*/

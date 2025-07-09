function saludar(nombre){
    console.log(`Hola ${nombre}`);
    return null;
}

function saludarAlreves(nombre){
    console.log(`${nombre} aloH`);
}

function ejecutarSaludo(funcionSaludo){
    //let nombreRecibido = prompt("Escribe tu nombre: ");
    let nombreRecibido = "Pedro";
    funcionSaludo(nombreRecibido);
}

let ordenes = [];

setTimeout(() => {
    ordenes.push("Pizza hawaiana");
    console.log(`Hay una nueva orden`);
}, 2000);


ejecutarSaludo(saludar);
ejecutarSaludo(saludarAlreves);

// Función flecha -> Función anónima
ejecutarSaludo((nombre) => {
    console.log(`Bonjour ${nombre}`);
});

/*
    Recibe 2 parámetros
    1: callback -> La función a ejecutar cuando haya terminado el temporizador.
    2: Tiempo del temporizador en milisegundos -> 1s = 1000ms
                                                       1000 * 60
*/


setTimeout(() => {
    console.log(`Lista de órdenes`);
    console.log(ordenes);
}, 5000);

/*
    Ejecutar el callback cada n milisegunds
    Recibe 2 parámetros
    1: callback -> La función a ejecutar cuando haya terminado el temporizador.
    2: n son los milisegundos entre cada ejecución
*/
let contadorOrdenesFaltantes = 0;
let idIntervalo;
idIntervalo = setInterval(() => {
    console.log(`Lista de órdenes faltantes`);
    console.log(ordenes);
    contadorOrdenesFaltantes++;
}, 6000);

//clearInterval(idIntervalo);

setInterval(() => {
    if(contadorOrdenesFaltantes == 5){
        clearInterval(idIntervalo);
    }
}, 500);

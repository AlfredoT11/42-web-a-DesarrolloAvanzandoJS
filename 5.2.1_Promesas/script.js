/*
    Las promesas nacieron para ejecutar código una vez que un proceso asíncrono termina.

    Muchas veces no sabemos cuándo va a terminar un proceso asíncrono.
*/

/*
console.log(`Iniciando temporizador 1`);
let temporizador1 = new Promise((resolve, reject) => {
    setTimeout(() => {
        let edad = Math.floor(Math.random() * 18); // Generar un número aleatorio del 1 al 18.
        if (edad < 12) {
            console.log(`El valor es menor a 12. El usuario es un niño`);
            resolve(); // Cumplir la promesa.
        } else {
            console.log(`El valor es mayor o igual a 12. El usuario es un adulto`);
            reject(); // Rechazar la promesa.
        }
    }, 4000);
});


// .then() es un método que recibe un callback que se ejecuta cuando una promesa se cumple.
// .catch() es un métpdp que recibe un callback que se ejecuta cuando una promesa NO SE CUMPLE.
temporizador1
    .then((valorPromesaCumplida) => {
        console.log(`Abriendo Youtube Kids`);

        console.log(`Iniciando temporizador 2`);
        let temporizador2 = new Promise((resolve, reject) => {
            setTimeout(() => {
                console.log(`Temporizador 2 terminado`);
                resolve();
            }, 3000);
        });

        temporizador2.then((valorPromesaCumplida) => {
            console.log(`Promesa de temporizador 2 cumplida`);

            console.log(`Iniciando temporizador 3`);
            let temporizador3 = new Promise((resolve, reject) => {
                setTimeout(() => {
                    console.log(`Temporizador 3 terminado`);
                    resolve();
                }, 3000);
            });

            temporizador3.then((valorPromesaCumplida) => {
                console.log(`Promesa temporizador 3 cumplida`);

                console.log(`Iniciando temporizador 3`);
                let temporizador4 = new Promise((resolve, reject) => {
                    setTimeout(() => {
                        console.log(`Temporizador 4 terminado`);
                        resolve();
                    }, 3000);
                });

                temporizador4.then((valorPromesaCumplida) => {
                    console.log(`Promesa temporizador 4 cumplida`);

                    console.log(`Iniciando temporizador 5`);
                    let temporizador5 = new Promise((resolve, reject) => {
                        setTimeout(() => {
                            console.log(`Temporizador 5 terminado`);
                            resolve();
                        }, 3000);
                    });

                    temporizador5.then((valorPromesaCumplida) => {

                    })
                });
            })

        }).catch((valorPromesaRota) => {
            console.log(`Promesa de temporizador 2 rota`);
        });
    })
    .catch((valorPromesaRota) => {
        console.log(`Abriendo Youtube normal`);
    });
*/


/*
    Hornear un pastel
    1. Comprar los ingredientes         - 5s
    2. Preparamos nuestros ingredientes - 4s
    3. Precalentar el horno             - 3s
    4. Horneamos los ingredientes       - 4s
    5. Servimos el pastel               - 1s
*/

console.log(`1. Comprar los ingredientes`)
let paso1 = new Promise((resolve, reject) => {
    setTimeout(() => {
        console.log(`Paso 1. LISTO`);
        let probabilidadDeExito = Math.random(); // Generar un número del 0 al 1.
        if(probabilidadDeExito <= 0.8){
            resolve('Todo bien en paso 1'); // Cumplimos la promesa.
        }else{
            reject('No había levadura'); // Rechazamos la promesa.
        }
    }, 5000);
});

paso1.then((valor) => {
    console.log(valor);
    console.log(`2. Preparamos nuestros ingredientes`);
    let paso2 = new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log(`Paso 2. LISTO`);
            let probabilidadDeExito = Math.random(); // Generar un número del 0 al 1.
            if(probabilidadDeExito <= 0.8){
                resolve('Todo bien en paso 2'); // Cumplimos la promesa.
            }else{
                reject('La batidora está rota'); // Rechazamos la promesa.
            }
        }, 4000);
    });
    return paso2;
}).then((valor) => {
    console.log(valor);
    console.log(`3. Precalentar el horno`)
    let paso3 = new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log(`Paso 3. LISTO`);
            let probabilidadDeExito = Math.random(); // Generar un número del 0 al 1.
            if(probabilidadDeExito <= 0.1){
                resolve('Todo bien en paso 3'); // Cumplimos la promesa.
            }else{
                reject('Ya no había gas'); // Rechazamos la promesa.
            }
        }, 3000);
    });
    return paso3;
}).then((valor) => {
    console.log(valor);
    console.log(`4. Horneamos los ingredientes`)
    let paso4 = new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log(`Paso 4. LISTO`);
            let probabilidadDeExito = Math.random(); // Generar un número del 0 al 1.
            if(probabilidadDeExito <= 0.8){
                resolve('Todo bien en paso 4'); // Cumplimos la promesa.
            }else{
                reject('Se me cayó el pastel antes de meterlo al horno'); // Rechazamos la promesa.
            }
        }, 4000);
    });
    return paso4;
}).then((valor) => {
    console.log(valor);
    console.log(`5. Servir pastel`);
    let paso5 = new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log(`Paso 5. LISTO`);
            let probabilidadDeExito = Math.random(); // Generar un número del 0 al 1.
            if(probabilidadDeExito <= 0.8){
                resolve('Todo bien en paso 5'); // Cumplimos la promesa.
            }else{
                reject('Mi primito se comió el pastel'); // Rechazamos la promesa.
            }
        }, 1000);
    });
    return paso5;
}).then(valor => {
    console.log(valor);    
    console.log(`El pastel está terminado`);
}).catch((valorPromesaRota) => {
        console.log(`Ocurrió un problema al hornear nuestro pastel`);
        console.log(valorPromesaRota);
});

/*
    Módulo 1. Menú interactivo
        Ejercicio de hoy: Crear una pantalla donde se muestre el menú del restaurante/cafetería.
                            Cada platillo del menú tendrá un botón para agregarse a la cuenta.
                            Cada que se de click al botón de agregar de un platillo, este se debe agregar a un carrito de compras.
    
    Módulo 2.  Gestionar pedidos en línea
        Ejercicio adicional: Crear una pantalla donde se muestren todos los pedidos hechos a través de internet.
                            Para cada pedido agregar un botón para entregar el pedido.
                            Al dar click en el botón, este se debe eliminar de la lista de pedidos.
*/

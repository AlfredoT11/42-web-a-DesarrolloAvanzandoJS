let ordenes = [];

function agregarOrden(){
    setInterval(() => {
        ordenes.push("Pizza");
        console.log("Pizza agregada a la lista");
        console.log(ordenes);
    }, 1000);
}

function entregarOrden(){
    setInterval(() => {
        ordenes.pop();
        console.log("Pizza entregada");
        console.log(ordenes);
    }, 2000);
}

agregarOrden();
entregarOrden();
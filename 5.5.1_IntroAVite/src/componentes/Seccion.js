import { TituloConLinea } from "./TituloConLinea";

/*
<div>
    <div>
        <h1>Texto</h1>
        <hr>
    </div>
    <p>Este es el contenido del párrafo</p>
</div>
*/

export function Seccion(textoTitulo, textoParrafo){
    //1. Crear el div padre
    let elementoDiv = document.createElement("div");
    //2. Mandar a llamar el componente con el título y la línea horizontal.
    let elementoTitulo = TituloConLinea(textoTitulo);
    //3. Agregar el componente que tiene el título al div padre.
    elementoDiv.append(elementoTitulo);

    //4. Creammos un elemento p.
    let elementoParrafo = document.createElement("p");
    //5. Le damos texto al elemento p.
    elementoParrafo.innerText = textoParrafo;
    //6. Agregamos el elemento p al elemento div padre.
    elementoDiv.append(elementoParrafo);

    //7. Regresamos el elemento padre.
    return elementoDiv;
}
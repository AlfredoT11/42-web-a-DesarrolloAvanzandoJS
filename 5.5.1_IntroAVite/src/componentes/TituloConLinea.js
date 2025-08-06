import { Titulo } from "./Titulo";

export function TituloConLinea(tituloTexto){
    let elementoDiv = document.createElement("div");
    let elementoTitulo = Titulo(tituloTexto);
    elementoDiv.append(elementoTitulo);

    let elementoHR = document.createElement("hr");
    elementoDiv.append(elementoHR);

    return elementoDiv;
}
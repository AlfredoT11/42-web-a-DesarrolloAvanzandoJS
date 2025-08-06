import { Titulo, holaMundo } from './componentes/Titulo';
import { TituloConLinea } from './componentes/TituloConLinea';
import { Seccion } from './componentes/Seccion';

let divApp = document.getElementById("app");

//1. La función Titulo() regresa un elemento de HTML.
let titulo1 = Titulo("Hola");
let titulo2 = Titulo("mundo");
let titulo3 = Titulo("soy");
let titulo4 = Titulo("un");
let titulo5 = Titulo("titulo");

let tituloConLinea1 = TituloConLinea("Banda");
let tituloConLinea2 = TituloConLinea("Primer disco");
let tituloConLinea3 = TituloConLinea("Origenes");

let seccion1 = Seccion("Los chilaquiles", "La banda los chilaquiles son originarios de Zapopan");
let seccion2 = Seccion("Primer disco", "Su primer disco se estrenó en el año 2025 bajo el sello de los discos mexicanos.");
let seccion3 = Seccion("Integrantes", "Los integrantes de la banda son los totopos, la crema y el queso.");



//2. La función append() agrega un elemento a otro elemento.
divApp.append(titulo1);
divApp.append(titulo2);
divApp.append(titulo3);
divApp.append(titulo4);
divApp.append(titulo5);

divApp.append(tituloConLinea1);
divApp.append(tituloConLinea2);
divApp.append(tituloConLinea3);

divApp.append(seccion1);
divApp.append(seccion2);
divApp.append(seccion3);

/*
  <h1>Soy un título</h1>
  <h1>Soy un título</h1>
  <h1>Soy un título</h1>
  <h1>Soy un título</h1>
*/

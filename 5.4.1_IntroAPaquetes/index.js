const numberToText = require('number-to-text');
require('number-to-text/converters/en-us');

console.log("¡Hola mundo!");
/*
    Crear una aplicación que convierta un valor número a formato de texto.
    1 -> Uno.
    102 -> Ciento dos.
    99999 -> Novecientos noventa y nueve mil novecientos noventa y nueve.
*/



let texto = numberToText.convertToText(12346);
console.log(texto);

texto = numberToText.convertToText("54321");
console.log(texto);

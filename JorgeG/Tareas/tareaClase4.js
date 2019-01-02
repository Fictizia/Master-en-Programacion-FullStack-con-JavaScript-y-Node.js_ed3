// 1 - Utiliza .assert para controlar cuando se muestra tu nombre por consola.

var name = "Jorge";
console.assert(nombre === "Jorge", "Right name");

var name = "Paco";
console.assert(nombre === "Jorge", "Wrong name");

/* 2 - Crea un script que nos permita calcular el tiempo que se necesita para realizar la siguientes acciones.
Especificaciones:
Imprimir tu nombre usando console.log, console.info, console.warn
*/

console.time("Medición de la impresión de mi nombre iniciada");

var name = "Jorge";
console.log(name);
console.info(name);
console.warn(name);

console.timeEnd("Medición de la impresión de mi nombre finalizada");


// 3 - Partiendo del ejercicio anterior mejora los estilos de cada mensaje usando estilos.


console.time("Medición de la impresión de mi nombre iniciada");

console.log("%c Jorge", "background: #16A085; color: #FFF; font-size:25px;");
console.info("%c Jorge", "background: #8E44AD; color: #FFF; font-size:25px;");
console.warn("%c Jorge", "background: #C0392B; color: #FFF; font-size:25px;");

console.timeEnd("Medición de la impresión de mi nombre finalizada");

// 4 - Agrupa cada tipo de mensaje y añade un contador de tiempo por cada grupo.



// 5 -tabla de posiciones de compañeros (de izquierda a derecha, de delante hacia atrás)

var claseMasterJs = [
     { nombre: "Ulises", posicion: "0"},
     { nombre: "Jorge", posicion: "1" },
     { nombre: "Guille", posicion: "2" },
     { nombre: "Teba", posicion: "3" },
     { nombre: "Karina", posicion: "4"},
     { nombre: "Eva", posicion: "5"},
     { nombre: "Fabiola", posicion: "6"}
 ];
 
console.table(claseMasterJs);
 
console.table(claseMasterJs, "posicion");

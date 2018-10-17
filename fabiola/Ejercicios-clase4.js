//consola

// 1. Utiliza .assert para controlar cuando se muestra tu nombre por consola.

let miNombre = 'otroNombre';
console.assert(miNombre === 'Fabiola', 'That is not my name!');

miNombre = 'Fabiola';
console.assert(miNombre === 'Fabiola', 'That is my name!');

/*2. Crea un script que nos permita calcular el tiempo que se necesita para realizar la siguientes acciones.
 - Especificaciones:
    Imprimir tu nombre usando console.log, console.info, console.warn*/

console.time('Imprimo mi nombre en: ');
let myName = 'Fabiola';
console.log(myName);
console.info(myName);
console.warn(myName);
console.timeEnd('Imprimo mi nombre en: ');

// 3. Partiendo del ejercicio anterior mejora los estilos de cada mensaje usando estilos.

console.time('Imprimo mi nombre en: ');
console.log('%c fabiola ', 'background: #BADA55; color: #FFF; font-size:32px;');
console.info(
  '%c fabiola ',
  'background: #2980b9; color: #FFF; font-size:24px;'
);
console.warn(
  '%c fabiola ',
  'background: #f1c40f; color: #FFF; font-size:24px;'
);
console.timeEnd('Imprimo mi nombre en: ');

// 4. Agrupa cada tipo de mensaje y añade un contador de tiempo por cada grupo.

console.group('log-group');
console.time('log-time');
console.log('%c fabiola ', 'background: #BADA55; color: #FFF; font-size:32px;');
console.timeEnd('log-time');
console.groupEnd('log-group');

console.group('info-group');
console.time('info-time');
console.info(
  '%c fabiola ',
  'background: #2980b9; color: #FFF; font-size:24px;'
);
console.timeEnd('info-time');
console.groupEnd('info-group');

console.group('warn-group');
console.time('warn-time');
console.warn(
  '%c fabiola ',
  'background: #f1c40f; color: #FFF; font-size:24px;'
);
console.timeEnd('warn-time');
console.groupEnd('warn-group');

// 5. Crea una tabla usando la consola para mostrar el nombre de tus compañeros y el puesto que ocupa en la clase.

const clase3 = [
  { nombre: 'Juan', puesto: 1 },
  { nombre: 'Guillermo', puesto: 2 },
  { nombre: 'Teba', puesto: 3 },
  { nombre: 'Karina', puesto: 4 },
  { nombre: 'Leyre', puesto: 5 },
  { nombre: 'Eva', puesto: 6 },
  { nombre: 'Fabiola', puesto: 7 }
];
console.table(clase3);

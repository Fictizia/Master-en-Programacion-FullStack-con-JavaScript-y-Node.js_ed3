// Math

/* 1 - Diseña un algoritmo que simula el lanzamiento de una moneda al aire e imprimir si ha salido cara o cruz. */
function flipCoin() {
  let randomNum = Math.floor(Math.random() * 2);
  console.log(randomNum === 1 ? 'Heads' : 'Tails');
}

flipCoin();

/* 2 - Diseña un algoritmo que simula cien tiradas de dos dados y contar las veces que entre los dos suman 10. */
function rollingDice() {
  let counter = 0;

  for (let i = 0; i < 100; i++) {
    let max = 7;
    let min = 1;
    let die1 = Math.floor(Math.random() * (max - min) + min);
    let die2 = Math.floor(Math.random() * (max - min) + min);
    let sumPoints = die1 + die2;

    sumPoints === 10 && counter++;
  }
  console.log(counter);
}

rollingDice();


// Dates

/*3 - Nivel Medio ♠️ Diseña un script que confirme si una fecha es valida y además devuelva la fecha en dos formatos diferentes.

Características:
El usuario introduce tres números (día, mes, año) usando una función.
Validar la fecha. En caso de error incluir un mensaje informativo.
Después de validar, devolvemos la fecha en formato DD/MM/AAAA
Convertimos el número del mes, en el nombre del mes real y devolvemos la fecha en el siguiente formato ( DD de MES de AAAA)*/

//Solución


/* 4 - ¿Que fecha será dentro de 30 días? */
function inThirtyDays() {
  let today = new Date();
  let day = today.getDate();
  let month = today.getMonth() + 1;
  let year = today.getFullYear();
  let formatedToday = `${day}/${month}/${year}`;
  console.log('Hoy es: ', formatedToday);

  today.setDate(today.getDate() + 30);
  let dd = today.getDate();
  let mm = today.getMonth() + 1;
  let y = today.getFullYear();

  let formattedDate = `${dd}/${mm}/${y}`;
  console.log('Dentro de treinta días será: ', formattedDate);
}

inThirtyDays();

/* 5 - ¿Cuantas horas han pasado desde que emepezó este master? y... ¿en días? */
function sinceMasterStart() {
  let startDate = new Date(2018, 9, 1, 19, 0, 0);
  let endDate = new Date();
  let mSecDay = 24 * 60 * 60 * 1000;
  let mSecHour = 60 * 60 * 1000;
  let differenceMSec = endDate.getTime() - startDate.getTime();
  let differenceDays = Math.round(differenceMSec / mSecDay);
  let differenceHours = Math.round(differenceMSec / mSecHour);
  console.log(
    'Desde que empezó el master han pasado: ',
    differenceHours,
    ' horas'
  );
  console.log(
    'Desde que empezó el master han pasado: ',
    differenceDays,
    ' días'
  );
}

sinceMasterStart();

/* 6 - ¿Cuantos milisengundos quedan para terminar el master? y... ¿en horas o días? */
function toMasterEnd() {
  let startDate = new Date();
  let endDate = new Date(2019, 6, 1, 19, 0, 0);
  let mSecDay = 24 * 60 * 60 * 1000;
  let mSecHour = 60 * 60 * 1000;
  let differenceMSec = endDate.getTime() - startDate.getTime();
  let differenceDays = Math.round(differenceMSec / mSecDay);
  let differenceHours = Math.round(differenceMSec / mSecHour);

  console.log(
    'Para que termine el master faltan: ',
    differenceMSec,
    'milisegundos'
  );
  console.log('Para que termine el master faltan: ', differenceDays, 'días');
  console.log('Para que termine el master faltan: ', differenceHours, 'horas');
}

toMasterEnd();

/* 7 - ¿Que fecha será dentro de un año y 10 horas más? */
function aYearLater() {
  let today = new Date();
  let year = today.getFullYear();
  let month = today.getMonth();
  let day = today.getDate();
  let hours = today.getHours();
  let minutes = today.getMinutes();
  let aYearFromNow = new Date(year + 1, month, day, hours + 10, minutes);
  let formatedDate = aYearFromNow.toLocaleString();
  console.log('En un año más diez horas será: ', formatedDate);
}

aYearLater();

/* 8 - Imprimir por consola la fecha completa (formato texto) en koreano y japones. */
var today = new Date();
let options = {
  weekday: 'long',
  year: 'numeric',
  month: 'long',
  day: 'numeric'
};
console.log(today.toLocaleDateString('ko-KR', options));
console.log(today.toLocaleDateString('ja-JP-u-ca-japanese', options));

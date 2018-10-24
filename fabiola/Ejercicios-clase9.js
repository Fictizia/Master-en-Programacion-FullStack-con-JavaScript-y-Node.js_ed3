/* 1 - Diseña un algoritmo que cuente las veces que aparece una determinada letra en una frase. */
// Tu soluciones
let phrase = 'supercalifragilisticexpialidocious';
let letterToCount = 'i';

function letterCounter(phrase, letterToCount) {
  let lettersArray = phrase.toLowerCase().split('');
  let counter = 0;
  let wordCount = lettersArray.filter(function (letter) {
    if (letterToCount === letter) {
      counter += 1;
    }
  });
  let answer =
    counter > 1 ?
    'La letra ' +
    letterToCount +
    'aparece: ' +
    counter +
    ' veces en la frase.' :
    'La letra ' +
    letterToCount +
    ' aparece: ' +
    counter +
    ' vez en la frase';
  console.log(answer);
}

letterCounter(phrase, letterToCount);

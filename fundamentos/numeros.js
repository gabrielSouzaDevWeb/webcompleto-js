const PESO1 = 1.0;
const PESO2 = Number('2.0');

console.log(PESO1, PESO2);
console.log(Number.isInteger(PESO1));
console.log( Number.isInteger(PESO2));

const avaliacao1 = 9.871;
const avaliacao2 = 6.871;

const total = avaliacao1 * PESO1
    + avaliacao2 * PESO2;
const media = total / (PESO1 + PESO2);

console.log(media.toFixed(2));
console.log(media.toString(2));
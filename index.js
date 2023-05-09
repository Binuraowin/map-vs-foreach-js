const numbersArray = [1, 2, 3, 4, 5];

// map()
console.time('map');
const mapMultipyedNumbersArray = numbersArray.map((num) => num * 5);
console.timeEnd('map');

// forEach()
console.time('forEach');
const forEachMultipyedNumbersArray = [];
numbersArray.forEach((num) =>
{
forEachMultipyedNumbersArray.push(num * 5);
});
console.timeEnd('forEach');

console.log(mapMultipyedNumbersArray); // Output: [ 5, 10, 15, 20, 25 ]
console.log(forEachMultipyedNumbersArray); // Output: [ 5, 10, 15, 20, 25 ]



let numbersArrayMap = [1, 2, 3, 4, 5];
const numbersArrayForEach = [1, 2, 3, 4, 5];

// map()
console.time('map');
numbersArrayMap = numbersArrayMap.map((num) => num * 5);
console.timeEnd('map');

// forEach()
console.time('forEach');
// const forEachMultipyedNumbersArray = [];
numbersArrayForEach.forEach((num, index, arr) => {
    arr[index] = num * 5;
 });
console.timeEnd('forEach');

console.log(numbersArrayMap); // Output: [ 5, 10, 15, 20, 25 ]
console.log(numbersArrayForEach); // Output: [ 5, 10, 15, 20, 25 ]



const numbers = [2, 3, 5, 6, 7, 8, 9, 12];

let numbersSqure = [];
for (let i = 0; i < numbers.length; i++) {
    const element = numbers[i];
    const squre = element * element;
    numbersSqure.push(squre)

}
console.log(numbersSqure);

// lets do same thing using map
//The map() method creates a new array with the results of calling a function for every array element.

const ages = [12, 23, 12, 11, 9];
ages.map(function (element, index, arr) {
    console.log(element, index, arr)
}) // map take 3 parameter, which are element to access element index and full array

const ages2 = [12, 23, 12, 11, 9];
const squreAges = ages2.map(function (element) {
    return element * element;
});
console.log(squreAges)  // we got the new arry 


// let's use ES6
const gfAge = [20, 23, 27, 25, 22];
const squreGfAges = gfAge.map(element => element * element);
console.log(squreGfAges); // so we got the new array, where my ex are too old !


// filter
const seniorGf = gfAge.filter(x => x > 24);
console.log(seniorGf);
// we got the result for seniorGf [25, 27]


const crush = [
    { name: 'Nafisa', color: 'Ivory', id: 21 },
    { name: 'Bipasha', color: 'Honey', id: 19 },
    { name: 'Afra', color: 'Beige', id: 03 }
]
const getName = crush.map(c => c.name);
console.log(getName); // we got my crush name. 
const getColor = crush.map(c => c.color);
console.log(getColor) // we got my crush's color
const getId = crush.map(c => c.id);
console.log(getId); // we got their id
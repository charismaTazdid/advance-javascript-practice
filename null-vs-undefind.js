let flower;
console.log(flower) // undefind

function addNumber(num1, num2){
    const sum = num1 + num2;
}
console.log(addNumber(44, 33));  // undefind => couse we don't return the sum

//case 2 by function
function getSum(num1, num2){
    const sum = num1 + num2;
    console.log(num1, num2)
    return sum;
}
const result = getSum(40); //we don't pass 2nd parameter, that means undefind. so result would be (number 40 + undefind) = NaN.
console.log(result);


// undefind in an objcet 
const student = {
    name:'Aoyon',
    roll: 40,
    phone: 123456789
}
// console.log(student.name);
console.log(student.girlFriend); // I have no girlfriend, so result would be undefind

// undefind in an array
const exGirlFriend = ['lily', 'Ira', 'Shaki']
console.log(exGirlFriend[5]); //I have only 3 ex, end index is 2. so index 5 output would be undefind.

// Undefind always negative or falsy value



// null represents the intentional absence of any object value. 
// It is one of JavaScript's primitive values and is treated as falsy for boolean operations.
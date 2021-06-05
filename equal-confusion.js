const exGF = 3;
const brokenHeart = '3';
if (exGF == brokenHeart) {
    console.log("condition True")
} else {
    console.log("Condition False")
} // condition true! What the F* ! brokenHeart is a String!

// ok, let's check using ( === )

const exGf = 3;
const broken_heart = '3';
if (exGf === broken_heart) {
    console.log("condition True")
} else {
    console.log("Condition False")
}
// result => condition false.

// Double Equals ( == ) checks for value equality only. It inherently does type coercion. On the other hand, Triple Equals ( === ) does not perform type coercion. It will verify whether the variables being compared have both the same value AND the same type.


// another example

const num = 1;
const num2 = true;
if (num == num2) {
    console.log(" condition true. ");
}
else {
    console.log("condition false");
} // result is "condition true"

// let's check by (===)
const number = 1;
const number2 = true;
if (number === number2) {
    console.log(" condition true. ");
}
else {
    console.log("condition false");
} // now output comes "condition false"
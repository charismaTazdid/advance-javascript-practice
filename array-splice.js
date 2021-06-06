// The splice() method is a built-in method for JavaScript Array objects. It lets us change the content of our array by removing or replacing existing elements with new ones. 

// lets sliceing first
const numbers = [2, 3, 4, 5, 6, 7, 8, 9];
const part = numbers.slice(1, 5);
console.log(part)
console.log(numbers)

// spliceing now
const nums= [1, 2, 3, 4, 5, 6, 7, 8, 9];
const remove = nums.splice(1, 5, 99, 88);  // removing index 1 to 5 number of element and replacing 99 and 88
console.log(remove);
console.log(nums);

// joining element and its convert number to string
const idNo= [ 3, 1, 4, 6, 7];
const togather = idNo.join("")
console.log(togather);


const friendAge = [19, 18, 20, 22, 12, 24];
for (let i = 0; i < friendAge.length; i++) {
    if (friendAge[i] > 20) {
        break;
    }
    console.log(friendAge[i]);
}


const numbers = [12, 34, -56, 5, -32, 98, -89, 94];
for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] < 0) {
        continue;
    }
    console.log(numbers[i]);
}
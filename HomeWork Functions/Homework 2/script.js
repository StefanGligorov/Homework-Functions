function input(number) {
    if(number > 15) { // it`s not expected dogs to live longer than 15 years so we put that as an upper limit
        result = number / 7; // human years
    } else {
        result = number * 7; // dog years
    }
    return result;
}

let inputDog = input(9);
let inputHuman = input(20);
console.log(inputDog);
console.log(inputHuman);
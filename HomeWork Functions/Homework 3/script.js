let money = 5000;

function withdraw(input) {
    if(money > input) {
        money = money - input;
        console.log("Withdrawn: " + input + ", " + "Money left on account: " + money);
    } else {
        console.log("Not enough money");
    }
}

let input = prompt("Enter amount of money to withdraw");
let numInput = parseInt(input);
withdraw(numInput);

function getComputerChoice () {
    // get a random number between 1 and 3
    let randomNo = Math.floor(Math.random() * 3)+1

    // if the number is 1, return rock
    if (randomNo === 1) return "rock";

    // if the number is 2, return paper
    if (randomNo === 2) return "paper";

    // if the number is 3, return scissors
    if (randomNo === 3) return "scissors";
}

console.log(getComputerChoice());
console.log(getComputerChoice());
console.log(getComputerChoice());
console.log(getComputerChoice());
console.log(getComputerChoice());
console.log(getComputerChoice());
console.log(getComputerChoice());
console.log(getComputerChoice());
console.log(getComputerChoice());
console.log(getComputerChoice());
console.log(getComputerChoice());
console.log(getComputerChoice());
console.log(getComputerChoice());

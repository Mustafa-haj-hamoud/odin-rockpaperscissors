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

function playRound(userSelection, computerSelection) {
    userSelection = userSelection.toLowerCase();
    if (userSelection === "rock" && computerSelection === "rock") return "draw, rock doesn't beat rock";
    else if (userSelection === "rock" && computerSelection === "paper") return "lost, paper beats rock";
    else if (userSelection === "rock" && computerSelection === "scissors") return "won, rock beats scissors";

    else if (userSelection === "paper" && computerSelection === "rock") return "won, paper beats rock";
    else if (userSelection === "paper" && computerSelection === "paper") return "draw, paper doesn't beat paper";
    else if (userSelection === "paper" && computerSelection === "scissors") return "lost, scissors beats paper";

    else if (userSelection === "scissors" && computerSelection === "rock") return "lost, rock beats scissors";
    else if (userSelection === "scissors" && computerSelection === "paper") return "won, scissors beats paper";
    else if (userSelection === "scissors" && computerSelection === "scissors") return "draw, scissors doesn't beat scissors";

    else return undefined;
}

// infinite loop to get the correct guess from the player 
while (true){
    //ask user for input
    let userGuess = prompt("Enter 'rock' or 'paper' or 'scissors'");

    //make sure the user actually entered something
    if (!userGuess) {
        alert("Please choose a value");
        continue;
    }

    userGuess = userGuess.toLowerCase();

    // check if user entered a valid response, if so, break out of the loop, otherwise prompt again
    if (userGuess !== "rock" || userGuess !== "paper" || userGuess !== "scissors") break;
    else alert("Invalid choice, try again");
}

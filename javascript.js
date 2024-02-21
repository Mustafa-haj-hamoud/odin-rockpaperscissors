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


function getUserChoice(){
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
        if (userGuess === "rock" || userGuess === "paper" || userGuess === "scissors") return userGuess;
        else alert("Invalid choice, try again");
    }
}

function calculateWinner(wins,losses){
    if (wins > losses) return "player won";
    else if (losses > wins) return "computer won";
    else if (losses === wins) return "it was a draw";
}

function playGame(gamesNumber = 5) {
    let roundsWon= 0 ;
    let roundsLost = 0 ;
    let draws = 0 ;
    for (let i = 0; i < gamesNumber; i++){
        //get user and computer choices
        userChoice = getUserChoice();
        computerChoice = getComputerChoice();

        //play a round and print the result
        let result = playRound(userChoice,computerChoice);
        console.log(result);

        //result will be either "won," , "lost", or "draw"
        result = result.slice(0,4)

        //add one to the score if the user won the round
        if (result === "won,") roundsWon++;
        else if (result === "lost") roundsLost++;
        else draws++;
    }
    console.log(`wins:${roundsWon}, losses:${roundsLost}, draws:${draws}`);
    console.log(calculateWinner(roundsWon,roundsLost));
}

playGame();
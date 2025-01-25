let gameItem = ["paper", "rock", "scissors"];
let playerScore = 0;
let computerScore = 0;
let gameRound = 0;

const parent = document.querySelectorAll("#parent > div");
let pick;

parent.forEach((element, index) => {
    element.addEventListener("click", () => {
        pick = gameItem[index];
        play();
    });
});

const checkWinner = (userInput, computer) => {
    if (userInput === computer) {
        return "draw";
    } else if (userInput === "rock") {
        return computer === "scissors" ? "player" : "computer";
    } else if (userInput === "paper") {
        return computer === "scissors" ? "computer" : "player";
    } else {
        return computer === "paper" ? "player" : "computer";
    }
};

const showResult = (result) => {
    if (result === "player") {
        document.querySelector(".resultEachRound").innerHTML ="You win this round!";
        playerScore++;
    } else if (result === "computer") {
        document.querySelector(".resultEachRound").innerHTML ="You lose this round.";
        computerScore++;
    } else {
        document.querySelector(".resultEachRound").innerHTML ="It's a draw!";
    }
    console.log(`Your score: ${playerScore} | Computer score: ${computerScore}`);
    console.log("------------------------");
};

const play = () => {
    if (gameRound >= 2) {
        document.querySelector(".resultOfGame").innerHTML=playerScore > computerScore ? "You win the game!" : "Computer wins the game!";
        return;
    }

    if (!pick) {

        console.log("Please select an option to play!");
        return;
    }

    let computerChooseIndex = Math.floor(Math.random() * 3);
    let computerChoose = gameItem[computerChooseIndex];

    document.querySelector(".choosen").innerHTML = `You chose ${pick} and Computer chose ${computerChoose}`;
    
    const gameResult = checkWinner(pick, computerChoose);
    showResult(gameResult);

    gameRound++;
    if (gameRound === 2) {
        console.log(playerScore > computerScore ? "You win the game!" : "Computer wins the game!");
    }
};

let gameItem = ["rock","paper","scissors"];
let playerScore = 0;
let computerScore =0;
let gameRound = 0;
const checkWinner = (userInput,computer) =>{
    if(userInput===computer){
        return "draw"
    }else if(userInput==="rock"){
        return computer==="scissors"?"player":"computer";
    }else if(userInput==="paper"){
        return computer==="scissors"?"computer":"player";
    }else{
        return computer==="paper"?"player":"computer";
    }
};
const showResult = (result)=>{
    if(result ==="player"){
        console.log("you win");
        playerScore++;
    }else if(result==="computer"){
        console.log("you lose");
        computerScore++;
    }else(
        console.log("both win")
    )
    console.log(`your score is ${playerScore} and computer score is ${computerScore}`);
    console.log("------------------------");
}; 
const play = ()=>{
    let input = prompt();
    let gameItem = ["rock","paper","scissors"];
    let computerChooseIndex = Math.floor(Math.random()*3);
    let computerChoose = gameItem[computerChooseIndex];
    if( typeof input==="string" && gameItem.includes(input.toLowerCase())){
        console.log(`you choose ${input}`);
        console.log(`computer choose ${computerChoose}`);
        const gameResult = checkWinner(input,computerChoose);
        showResult(gameResult);
    }else{
        console.log("you cheated");
    };
}
while(gameRound<3){
    play();
    gameRound++;
}
console.log(playerScore>computerScore?"you win":"computer win");





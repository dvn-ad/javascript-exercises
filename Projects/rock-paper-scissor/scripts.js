// const { upperCase } = require("case-anything");

console.log("Hello World!")



/*
0 = rock
1 = paper
2 = scissor
*/
function getComputerChoice (){
    const comp = Math.floor(Math.random() * 3);
    const choice = comp == 0 ? "ROCK" : comp == 1 ? "PAPER" : "SCISSOR";
    return choice;
}

// function getHumanChoice(){
//     const choice = prompt("Rock, Paper, Scissor?");
//     return choice.toUpperCase();
// }

let humanScore = 0;
let computerScore = 0;

function playRound(humanChoice, computerChoice){
    if(humanChoice=="ROCK" && computerChoice=="PAPER"){
        computerScore++;
        // alert("You: " + humanScore + " Robot: " + computerScore +"\nYou lose! Paper beats Rock");
    }else if(humanChoice=="ROCK" && computerChoice=="SCISSOR"){
        humanScore++;
        // alert("You: " + humanScore + " Robot: " + computerScore +"\nYou win! Rock beats Scissor");
    }else if(humanChoice=="PAPER" && computerChoice=="ROCK"){
        humanScore++;
        // alert("You: " + humanScore + " Robot: " + computerScore +"\nYou win! Paper beats Rock");
    }else if(humanChoice=="PAPER" && computerChoice=="SCISSOR"){
        computerScore++;
        // alert("You: " + humanScore + " Robot: " + computerScore +"\nYou lose! Scissor beats Paper");
    }else if(humanChoice=="SCISSOR" && computerChoice=="ROCK"){
        computerScore++;
        // alert("You: " + humanScore + " Robot: " + computerScore +"\nYou lose! Rock beats Scissor");
    }else if(humanChoice=="SCISSOR" && computerChoice=="PAPER"){
        humanScore++;
        // alert("You: " + humanScore + " Robot: " + computerScore +"\nYou win! Scissor beats Paper");
    }else{
        // alert("You: " + humanScore + " Robot: " + computerScore + "\nDraw")
    }
}

// function playGame(){
//     for(let i=0; i<5;i++){
//         const humanChoice=getHumanChoice();
//         const computerChoice=getComputerChoice();
//         playRound(humanChoice,computerChoice);
//     }
//     if(humanScore>computerScore){
//         alert("You: " + humanScore + " Robot: " + computerScore + "\nYou Win!!!");
//     }else{
//         alert("You: " + humanScore + " Robot: " + computerScore + "\nYou lose :((((")
//     }
// }
// playGame();

const inputHuman = document.getElementById("humanChoice");
const result = document.getElementById("result");
const scoreHuman = document.getElementById("scoreHuman");
const scoreAI = document.getElementById("scoreAI");

inputHuman.addEventListener("keypress", (e)=>{
    if (e.key == "Enter"){
        const humanChoice = inputHuman.value.toUpperCase();
        const computerChoice = getComputerChoice();
        inputHuman.value="";
        playRound(humanChoice, computerChoice);
        scoreHuman.textContent=humanScore;
        scoreAI.textContent=computerScore;
    }
})


// for(let i=0; i<10; i++){
//     inputHuman.value="rock";
// }

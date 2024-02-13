let computerChoice = ["rock","paper","scissor"]
let computerPick;

function getComputerChoice(){
    computerPick = computerChoice[Math.floor(Math.random() * computerChoice.length)]
    return computerPick
}

let playerBtn = document.querySelectorAll("button");
let computerSelection;
let resultDisplay = document.querySelector("div")
let winnerDisplay = document.querySelector("p")

playerBtn.forEach((playerOptions) => {
    playerOptions.addEventListener("click", () => {
        computerSelection = getComputerChoice();
        let playerSelect = playerOptions.value
        resultDisplay.textContent = `player: ${playerSelect}, computer: ${computerSelection}`;

        if (playerSelect == "paper" && computerSelection == "rock"){
            winnerDisplay.textContent = "You win ! Paper beats rock ";
        } else if (playerSelect == "rock" && computerSelection == "scissor"){
            winnerDisplay.textContent = "You win ! Rock beats scissor";
        } else if (playerSelect == "scissor" && computerSelection == "paper"){
            winnerDisplay.textContent = "You win ! Scissor beats paper";
        }else if (playerSelect == computerSelection){
            winnerDisplay.textContent = "It's a tie !";
        }
        else{
            winnerDisplay.textContent = `You lose. ${computerSelection} beats ${playerSelect}`;
        }
    })
    
});



function playRound(playerSelect,computerSelection){
    playerSelect = prompt("Pick rock, paper or scissor").toLowerCase();
    computerSelection = getComputerChoice();

    console.log(computerSelection);
    console.log(playerSelect)

    
}


//console.log(playRound(playerSelect,computerSelection))
let computerChoice = ["rock","paper","scissor"]
let computerPick;

function getComputerChoice(){
    computerPick = computerChoice[Math.floor(Math.random() * computerChoice.length)]
    return computerPick
}

let playerBtn = document.querySelectorAll("button");
let computerSelection;
let itemSelection = document.querySelector("div")
let winnerDisplay = document.querySelector("p")
let playerScoreCounter = 0;
let computerScoreCounter = 0;
let finalResult;

playerBtn.forEach((playerOptions) => {
    playerOptions.addEventListener("click", () => {
        computerSelection = getComputerChoice();
        let playerSelect = playerOptions.value
        itemSelection.textContent = `player: ${playerSelect}, computer: ${computerSelection}`;

        if (playerSelect == "paper" && computerSelection == "rock"){
            playerScoreCounter++
            winnerDisplay.textContent = `Player score: ${playerScoreCounter}, Computer score: ${computerScoreCounter}`;
        } else if (playerSelect == "rock" && computerSelection == "scissor"){
            playerScoreCounter++
            winnerDisplay.textContent = `Player score: ${playerScoreCounter}, Computer score: ${computerScoreCounter}`;
        } else if (playerSelect == "scissor" && computerSelection == "paper"){
            playerScoreCounter++
            winnerDisplay.textContent = `Player score: ${playerScoreCounter}, Computer score: ${computerScoreCounter}`;
        }else if (playerSelect == computerSelection){
            winnerDisplay.textContent = `Player score: ${playerScoreCounter}, Computer score: ${computerScoreCounter}`;
        }
        else{
            computerScoreCounter++
            winnerDisplay.textContent = `Player score: ${playerScoreCounter}, Computer score: ${computerScoreCounter}`;
        }
        console.log(`Player score: ${playerScoreCounter}, Computer score: ${computerScoreCounter}`)
    })
    
});



function playRound(playerSelect,computerSelection){
    playerSelect = prompt("Pick rock, paper or scissor").toLowerCase();
    computerSelection = getComputerChoice();

    console.log(computerSelection);
    console.log(playerSelect)

    
}


//console.log(playRound(playerSelect,computerSelection))
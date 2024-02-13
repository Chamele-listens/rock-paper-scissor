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
let finalResult = document.querySelector("#finalResult")

playerBtn.forEach((playerOptions) => {
    playerOptions.addEventListener("click", () => {
        computerSelection = getComputerChoice();
        let playerSelect = playerOptions.value
        itemSelection.textContent = `player: ${playerSelect}, computer: ${computerSelection}`;
        finalResult.textContent = ""

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

        if (playerScoreCounter >= 5){
            finalResult.textContent = "You win!"
            playerScoreCounter = 0;
            computerScoreCounter = 0;
        }else if (computerScoreCounter >= 5){
            finalResult.textContent = "You lose"
            playerScoreCounter = 0;
            computerScoreCounter = 0;
        }


        console.log(`Player score: ${playerScoreCounter}, Computer score: ${computerScoreCounter}`)
    })
    
});
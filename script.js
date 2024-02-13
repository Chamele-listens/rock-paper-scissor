let computerChoice = ["rock","paper","scissor"]
let computerPick;

function getComputerChoice(){
    computerPick = computerChoice[Math.floor(Math.random() * computerChoice.length)]
    return computerPick
}

let playerSelect = document.querySelectorAll("button");
let computerSelection;

playerSelect.forEach((button) => {
    button.addEventListener("click", () => {
        alert(button.value);
    })
    
});



function playRound(playerSelect,computerSelection){
    playerSelect = prompt("Pick rock, paper or scissor").toLowerCase();
    computerSelection = getComputerChoice();

    console.log(computerSelection);
    console.log(playerSelect)

    if (playerSelect == "paper" && computerSelection == "rock"){
        return "You win ! Paper beats rock "
    } else if (playerSelect == "rock" && computerSelection == "scissor"){
        return "You win ! Rock beats scissor"
    } else if (playerSelect == "scissor" && computerSelection == "paper"){
        return "You win ! Scissor beats paper"
    }else if (playerSelect == computerSelection){
        return "It's a tie !"
    }
    else{
        return `You lose. ${computerSelection} beats ${playerSelect}`
    }
}


//console.log(playRound(playerSelect,computerSelection))
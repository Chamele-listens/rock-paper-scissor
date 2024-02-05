let computerChoice = ["rock","paper","scissor"]

function getComputerChoice(){
    let computerPick = computerChoice[Math.floor(Math.random() * computerChoice.length)]
    return computerPick
}

console.log(getComputerChoice());
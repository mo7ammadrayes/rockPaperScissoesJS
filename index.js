const buttons=["rock","paper","scisors"];
const palyerDisplay=document.getElementById("playerDisplay")
const computerDisplay=document.getElementById("computerDisplay");
const resultDisplay=document.getElementById("resultDisplay")
const playerScoreDisplay= document.getElementById("playeScoreNo");
const compScoreDisplay= document.getElementById("computerScoreNo");

let playerScore=0;
let compScore=0;

function playGame(userChoice){
    const compChoice= buttons[Math.floor(Math.random()*3)]
    console.log(compChoice)
    console.log(userChoice)

    let result="";
if(compChoice=== userChoice){
    result=" it is a tie"
}
else{
    switch(userChoice){
     case "rock":
        result= ( compChoice==="scisors")?"player won":"computer won"  
        break
        case "scisors":
        result= ( compChoice==="paper")?"player won":"computer won"  
        break
        case "paper":
        result= ( compChoice==="rock")?"player won":"computer won"  
        break
    }
}
palyerDisplay.textContent= `player: ${userChoice}`
computerDisplay.textContent= `computer: ${compChoice}`
resultDisplay.textContent=result;
resultDisplay.classList.remove("lose","win")

switch(result){
    case"player won":
    resultDisplay.classList.add("win")
    playerScore++
    playerScoreDisplay.textContent=playerScore
    break;
    case"computer won":
    resultDisplay.classList.add("lose")
    compScore++
    compScoreDisplay.textContent=compScore

    break;
    
}

}

function resetGame(){
    compScore=0
    playerScore=0
    compScoreDisplay.textContent=compScore
    playerScoreDisplay.textContent=playerScore
    
    }
    
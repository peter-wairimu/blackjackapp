let firstCard = 12;
let secondCard = 2
let sum = firstCard + secondCard;
let blackJack = false
let isAlive = true
let message = "";





let messageEl = document.getElementById("message-el")

let sumEl = document.getElementById("sum-l")

let cardsEl = document.getElementById("cards-el")

function startGame(){
    renderGame()

}



function renderGame(){
    
sumEl.innerHTML = "Sum" + ": " + sum
cardsEl.innerHTML = "Cards:  12 2"

    if(sum <= 20){
        message ="Do you want to draw another card"
        
    }else if(sum === 21 ){
        message ="Hurray you have won the blackjack"
        blackJack = true
    
    }else{
        message = "You are out of the game"
        isAlive=false
    }
    


    messageEl.innerHTML = message
    
    
}



function newCard(){
    let card = 8
    sum +=card
    
    renderGame()
}



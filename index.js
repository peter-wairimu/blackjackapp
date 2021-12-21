
let sum = 0;
let cards = []

let blackJack = false
let isAlive = false
let message = "";

let play = {
    player: "peter",
    chips: 123
}


let platFoot = document.getElementById("play")
platFoot.innerHTML = play.player + " $" + play.chips

function getRandomCard(){
    let card = Math.floor(Math.random() * 13) + 1

    if (card > 10){
        return 10
    }else if(card === 1){
        return 11

    }else{
        return card
    }
    
}



let messageEl = document.getElementById("message-el")

let sumEl = document.getElementById("sum-l")

let cardsEl = document.getElementById("cards-el")

function startGame(){

    isAlive=true
    let firstCard =  getRandomCard()
    let secondCard = getRandomCard()
    
    cards =  [firstCard, secondCard]
    sum = firstCard + secondCard

    renderGame()

}



function renderGame(){

    
sumEl.innerHTML = "Sum" + ": " + sum
cardsEl.innerHTML = "Cards"
    for (let i = 0; i < cards.length; i++){
        cardsEl.innerHTML += " " + cards[i] + " "
    }

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
    if(isAlive === true && blackJack===false ){
        let card = getRandomCard()
        sum +=card
    
        cards.push(card)
        
        renderGame()

    }


}












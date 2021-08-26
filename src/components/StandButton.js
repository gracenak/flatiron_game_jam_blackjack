import React from 'react';

const StandButton = (props) => {

    let HandleClick = () => {
        alert("Player Has " + playerCardsTotal() + "!")
        alert("Dealer was hiding a " + hiddenCard())
        alert("Dealer Has " + dealerCardsTotal() + "!")
        if (playerCardsTotal() > 21) {
            alert("Player Has Busted!")
        } else if (playerCardsTotal() > dealerCardsTotal()) {
            alert("Player Wins!")
        } else if (playerCardsTotal() === dealerCardsTotal()) {
            alert("Player Pushes!")
        } else {
            alert("Player Loses!")
        }
    }

    let dealerCardsTotal = () => {
        let dealerHand = []
        let total = []
        props.dealerCards.cards.map(dcards =>
            dealerHand.push(dcards.value)
        )
        for (let i = 0; dealerHand.length > i; i++){
            if (dealerHand[i] === "KING" || dealerHand[i] === "QUEEN" || dealerHand[i] === "JACK"){
                total.push(10)
            } else if (dealerHand[i] === "ACE"){
                total.push(11)
            } else {
                total.push(parseInt(dealerHand[i], 10))
            }
        }
        let Dealertotal = total[0] + total[1] 
        return Dealertotal
    }

     let playerCardsTotal = () => {
        let finalTotal = []
        let total = []
        let finalScore = 0
        let aceAt = []
        props.cards.cards && props.cards.cards.map(cards =>
            finalTotal.push(cards.value)
        )
        if (props.hit.length !== 0){
            props.hit.map(cards =>
                {cards.cards.map(cards =>
                    finalTotal.push(cards.value)
                )}
            )
        }
        for (let i = 0; finalTotal.length > i; i++){
            if (finalTotal[i] === "KING" || finalTotal[i] === "QUEEN" || finalTotal[i] === "JACK"){
                total.push(10)
            } else if (finalTotal[i] === "ACE"){
                total.push(11)
                aceAt.push(i)
            } else {
                total.push(parseInt(finalTotal[i], 10))
            }
        }
        for (let i = 0; total.length > i; i++){
            finalScore += total[i]
        }
        if (finalScore > 21 && aceAt.length > 0){
            finalScore = playerHighTotal(finalTotal)
        }
        return finalScore
     }

     let playerHighTotal = (finalTotal) => {
        let total = []
        let finalScore = 0
        for (let i = 0; finalTotal.length > i; i++){
            if (finalTotal[i] === "KING" || finalTotal[i] === "QUEEN" || finalTotal[i] === "JACK"){
                total.push(10)
            } else if (finalTotal[i] === "ACE"){
                total.push(1)
            } else {
                total.push(parseInt(finalTotal[i], 10))
            }
        }
        for (let i = 0; total.length > i; i++){
            finalScore += total[i]
        }
        return finalScore
     }

     let hiddenCard = () => {
        let dealerHand = []
        props.dealerCards.cards && props.dealerCards.cards.map(dcards =>
            dealerHand.push(dcards.value)
        )
        return dealerHand[1]
     }

    return (
        <div>
        <button onClick={() => HandleClick()}>Stand</button>
        </div>
    )
};


export default StandButton;

import React from 'react';
// import { connect } from 'react-redux'


const StandButton = (props) => {



    let HandleClick = () => {
        alert("Player Has " + hitCardsTotal() + "!")
        alert("Dealer Has " + dealerCardsTotal() + "!")
        if (hitCardsTotal() > 21) {
            alert("Player Has Busted!")
        } else if (hitCardsTotal() > dealerCardsTotal()) {
            alert("Player Wins!")
        } else if (hitCardsTotal() === dealerCardsTotal()) {
            alert("Player Pushes!")
        } else {
            alert("Player Loses!")
        }


        // alert("No one wins yet");
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

     let hitCardsTotal = () => {
        let finalTotal = []
        let total = []
        let finalScore = 0
        props.cards.cards.map(cards =>
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
                total.push(10)
            } else {
                total.push(parseInt(finalTotal[i], 10))
            }
        }
        
        for (let i = 0; total.length > i; i++){
            finalScore += total[i]
        }
        return finalScore

     }

    // let playerFinalTotal = playerCardsTotal() + hitCardsTotal()

    return (
        <div>
        <button onClick={() => HandleClick()}>Stand</button>
        </div>
    )
};


export default StandButton;

// const mapStateToProps = state => {

//     return {
//         stand: state.stand

//     }

// }

// export default connect(mapStateToProps, { fetchStand })(StandButton);

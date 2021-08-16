import React from 'react';
// import { connect } from 'react-redux'


const StandButton = (props) => {



    let HandleClick = () => {
        if (playerCardsTotal() > dealerCardsTotal()) {
            alert("Player Wins")
        } else {
            alert("Player Loses")
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
                total.push(10)
            } else {
                total.push(parseInt(dealerHand[i], 10))
            }
        }
        let Dealertotal = total[0] + total[1] 
        console.log(Dealertotal)
        return Dealertotal
    }

    const playerCardsTotal = () => {

        let playerHand = []
        let total = []
        props.cards.cards.map(cards =>
            playerHand.push(cards.value)
        )
        for (let i = 0; playerHand.length > i; i++){
            if (playerHand[i] === "KING" || playerHand[i] === "QUEEN" || playerHand[i] === "JACK"){
                total.push(10)
            } else if (playerHand[i] === "ACE"){
                total.push(11)
            } else {
                total.push(parseInt(playerHand[i], 10))
            }
        }
        let playerTotal = total[0] + total[1] 
        console.log(playerTotal)
        return playerTotal

    }

    // let hitCardsTotal = () => {

    //     let totalHand = []

    //     props.hit.cards.map(hcards =>
    //         totalHand.push(parseInt(hcards.value, 10))
    //     )
    //     alert(totalHand.reduce((a, b) => a + b, 0))

    // }

    // let playerFinalTotal = playerCardsTotal() + hitCardsTotal()

    return (
        <div>
        <button onClick={() => HandleClick()}>Stand</button>
        <p>{playerCardsTotal}</p>
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

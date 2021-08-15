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
        let totalHand = []

        props.dealerCards.cards.map(dcards =>
            totalHand.push(parseInt(dcards.value, 10))
        )
        alert(totalHand.reduce((a, b) => a + b, 0))

    }

    let playerCardsTotal = () => {

        let totalHand = []

        props.cards.cards.map(cards =>
            totalHand.push(parseInt(cards.value, 10))
        )
        alert(totalHand.reduce((a, b) => a + b, 0))

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
        <button onClick={() => HandleClick()}>Stand</button>
    )
};


export default StandButton;

// const mapStateToProps = state => {

//     return {
//         stand: state.stand

//     }

// }

// export default connect(mapStateToProps, { fetchStand })(StandButton);

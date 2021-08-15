import React from 'react';
// import { connect } from 'react-redux'


const StandButton = ({ cards, dealersCards }) => {

    let HandleClick = () => {


        alert("No one wins yet");
    }

    let dealerCardsTotal = (dealerCards) => {


    }

    let playerCardsTotal = (cards) => {


    }



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

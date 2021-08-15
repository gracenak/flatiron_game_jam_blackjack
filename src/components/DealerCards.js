
import React from 'react';
import '../DealerCards.css'

const DealerCards = (props) => {
    return (
        <div className="HitCardsMap">
            
            <ul key={props.dcards.code}> Dealer Has One Card Faced Down And The {props.dcards.value} of {props.dcards.suit} Faced Up <br></br> <img src={props.dcards.image} alt={props.dcards.code}/></ul>
         </div>
    )
}

export default DealerCards;
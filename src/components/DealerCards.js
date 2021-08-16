import React from 'react';
import '../DealerCards.css';
import cardDown from '../components/images/cardDown.png';

const DealerCards = (props) => {


    return (
        <div className="HitCardsMap">
        
                        <ul key={props.dcards.code}>{props.dcards.value} of {props.dcards.suit}<br></br><img src={props.dcards.image} alt={props.dcards.code}/></ul>
        </div>
    )
}

export default DealerCards;
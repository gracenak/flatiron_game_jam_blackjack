import React from 'react';
import '../DealerCards.css';
import cardDown from '../components/images/cardDown.png';

const DealerCards = (props) => {


    return (
        <div className="HitCardsMap">
            <div className="card-flip">
                <div className="card-inner">
                    <div className="card-back">
                        <img src={cardDown} width="226px" height="314px" alt="card-down" /> 
                    </div>
                    <div className="card-front">
                        <ul key={props.dcards.code}>{props.dcards.value} of {props.dcards.suit}<br></br><img src={props.dcards.image} alt={props.dcards.code}/></ul>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default DealerCards;
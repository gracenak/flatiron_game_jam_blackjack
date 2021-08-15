import React from 'react';
import '../DealerCards.css'

const DealerCards = (props) => {
    

    return (
        <div className="DealerCardsMap">
            {props.dcards.cards.map(dcards =>
                <div className="DealerCards">
                Dealer Hand Value: {dcards.value}
                    <ul key={dcards.code}> {dcards.value} of {dcards.suit}</ul>
                    <img src={dcards.image} alt={dcards.code}/>
                    <h4>{props.value}</h4>

                </div>)}
                
        </div>
    )
}

export default DealerCards;
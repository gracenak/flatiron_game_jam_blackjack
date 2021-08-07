import React from 'react';
import '../DealerCards.css'

const DealerCards = (props) => {
    return (
        <div className="DealerCardsMap">
            {props.cards.cards.map(dcards =>
                <div className="DealerCards">
                    <ul key="{dcards.code}"> {dcards.value} of {dcards.suit}</ul>
                    <img src={dcards.image} />
                </div>)}
        </div>

    )
}

export default DealerCards;
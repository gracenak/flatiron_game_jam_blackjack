import React from 'react';
import '../Cards.css'


const AnotherCard = (props) => {
    return (
        <div className="CardsMap">
            {props.cards.cards.map(cards =>
                <div className="Cards">
                    <ul> {cards.value} of {cards.suit}</ul>
                    <img src={cards.image} alt={cards.code} />
                </div>)}
        </div>

    )
}

export default AnotherCard;

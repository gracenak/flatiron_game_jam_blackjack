import React from 'react';
import '../Cards.css'


const HitCard = (props) => {
    return (
        <div className="CardsMap">
            {props.cards.cards.map(cards =>
                <div className="Cards">
                    <ul key={cards.code}> {cards.value} of {cards.suit}</ul>
                    <img src={cards.image} alt={cards.code} />
                </div>)}
        </div>

    )
}

export default HitCard;


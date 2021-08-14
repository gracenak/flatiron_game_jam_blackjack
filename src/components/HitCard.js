import React from 'react';
import '../Cards.css'


const HitCard = (props) => {
    return (
        <div className="CardsMap">
            {props.cards.map(cards =>
                <div className="Cards">
                    {cards.cards.map(cards =>
                        <ul key={cards.code}> {cards.value} of {cards.suit}</ul>
                    )}
                </div>)}
         </div>
    )
}

export default HitCard;


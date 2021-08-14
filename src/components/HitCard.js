import React from 'react';
import '../HitCards.css'


const HitCard = (props) => {
    return (
        <div className="HitCardsMap">
            {props.cards.map(cards =>
                <div className="HitCards">
                    {cards.cards.map(cards =>
                        <ul key={cards.code}>  {cards.value} of {cards.suit} <br></br> <img src={cards.image} alt={cards.code}/></ul>
                    )}
                </div>)}
         </div>
    )
}

export default HitCard;


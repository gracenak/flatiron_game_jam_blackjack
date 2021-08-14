import React from 'react';
import '../Cards.css'


const HitCard = (props) => {
    return (
        <div className="CardsMap">
            {props.cards.map(cards =>
                <div className="Cards">
                    {cards.cards.map(cards =>
                        <ul key={cards.code}>  {cards.value} of {cards.suit} <br></br> <img src={cards.image} alt={cards.code}/></ul>
                    )}
                </div>)}
         </div>
    )
}

export default HitCard;


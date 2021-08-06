import React from 'react';

const CardsArray = (props) => {
    return (
        <div>
             {props.cards.cards.map(cards =>
                <div>
                    <li key={cards.code}>{cards.code} {cards.value} of {cards.suit}</li>
                    <img src={cards.image}></img>
                </div>)}
        </div>
        // props.cards.results.map(cards =>
        //     <div>
        //         <li>{cards.value}{cards.suit}</li>
        //     </div>
        // )
    )
}

export default CardsArray;

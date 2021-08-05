import React from 'react';

const CardsArray = (props) => {
    debugger
    return (
        <div>
            {props.cards.results.map(cards =>
                <div>
                    <li key={card.code}>{card.value}</li>
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

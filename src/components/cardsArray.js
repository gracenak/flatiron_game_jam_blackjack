import React from 'react';

const cardsArray = (props) => {
    props.cards.results.map(cards =>
        <div>
            <li>{cards.value}{cards.suit}</li>
        </div>
    )
}

export default cardsArray;

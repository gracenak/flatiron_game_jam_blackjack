import React from 'react';

const cardsArray = (props) => {
    props.cards.map(cards =>
        <div>
            <li>{cards.value}{cards.suit}</li>
        </div>
    )
}

export default cardsArray;

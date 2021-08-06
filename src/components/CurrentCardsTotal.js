import React from 'react';

const CurrentCardsTotal = (props) => {
    return (
        <div className={"TotalHandValue"}>
            Hand Value:
        </div>
    );
}

// const CardsArray = (props) => {
//     return (
//         <div className="CardsMap">
//             {props.cards.cards.map(cards =>
//                 <div className="Cards">
//                     <ul key={cards.code}> {cards.value} of {cards.suit}</ul>
//                     <img src={cards.image} />
//                 </div>)}
//         </div>

//     )
// }

export default CurrentCardsTotal;

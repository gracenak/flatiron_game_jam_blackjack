import React from 'react';
import '../Cards.css'


class HitCard extends React.Component {
    //{for(let i=0; i < props.cards.length; i++){

    //}}
    render(){
    return (
        <div className="CardsMap">
            {this.props.cards[0].cards.map(cards =>
                <div className="Cards">
                    <ul key={cards.code}> {cards.value} of {cards.suit}</ul>
                <img src={cards.image} alt={cards.code} />
                </div>)}
         </div>
    )}
}

export default HitCard;


import React from 'react';
import '../Cards.css'


class HitCard extends React.Component {

    renderCard() {
        for (let i = 0; i < this.props.cards.length; i++){
        return (
            <div className="CardsMap">
                {this.props.cards[i].cards.map(cards =>
                    <div className="Cards">
                        <ul key={cards.code}> {cards.value} of {cards.suit}</ul>
                    <img src={cards.image} alt={cards.code} />
                    </div>)}
             </div>
        )}
    }

    render(){
        return (
            <div>
                {this.renderCard()}
            </div>
        )
    }
}

export default HitCard;


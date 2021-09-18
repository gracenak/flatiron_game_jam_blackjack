import React from 'react';
import '../HitCards.css'


class HitCard extends React.Component {
    render(){
        return (
            <div className="HitCardsMap">
                {this.props.cards && this.props.cards.map(cards =>
                    <div className="HitCards">
                        {cards.cards.map(cards =>
                            <ul key={cards.code}>  {cards.value} of {cards.suit} <br></br> <img src={cards.image} alt={cards.code}/></ul>
                        )}
                    </div>)}
            </div>
        )
    }
}

export default HitCard;

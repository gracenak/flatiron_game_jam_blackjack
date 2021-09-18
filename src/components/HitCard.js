import React from 'react';
import '../HitCards.css'


class HitCard extends React.Component {
    bustCount = () => {
        let cards = this.props.givenCards
        let hand = []
        let total = []
        let currentTotal = 0
        //debugger
        cards.map(card =>
            card.cards.map(card => 
                hand.push(card.value)
                )
        )
        for (let i = 0; hand.length > i; i++){
            if (hand[i] === "KING" || hand[i] === "QUEEN" || hand[i] === "JACK"){
                total.push(10)
            } else if (hand[i] === "ACE"){
                total.push(11)
            } else {
                total.push(parseInt(hand[i], 10))
            }
        }
        debugger
    }

    render(){
        return (
            <div className="HitCardsMap">
                {this.props.hitCards && this.props.hitCards.map(cards =>
                    <div className="HitCards">
                        {cards.cards.map(cards =>
                            <ul key={cards.code}>  {cards.value} of {cards.suit} <br></br> <img src={cards.image} alt={cards.code}/></ul>
                        )}
                    </div>)}
                    <button onClick={() => this.bustCount()}>Busted?</button>
            </div>
        )
    }
}

export default HitCard;

import React from 'react';
import '../Cards.css'

class CardsArray extends React.Component {
    constructor(props) {
        super(props);
            this.state = {
                cards: this.props.cards.cards
            }
        }

    render(){
        return (
            <div className="CardsMap">
                {this.state.cards.map(cards =>
                    <div className="Cards">
                        <ul key={cards.code}> {cards.value} of {cards.suit}</ul>
                        <img src={cards.image} />
                    </div>)}
            </div>
        )
    }
}

export default CardsArray;

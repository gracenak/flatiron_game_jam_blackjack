import React from 'react';
import '../Cards.css'


class CardsArray extends React.Component {
    handleClick(){

    }


    render(){
        return (
        <div className="CardsMap">
            {this.props.cards.cards.map(cards =>
                <div className="Cards">
                    <ul key={cards.code}> {cards.value} of {cards.suit}</ul>
                    <img src={cards.image} alt={cards.code}/>
                </div>)}
                <button onClick={() => this.handleClick()}>Send Card Info</button>
        </div>
        )
    }
}

export default CardsArray;

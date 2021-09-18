import React from 'react';
import '../HitCards.css'


class HitCard extends React.Component {
    playerTotal = () => {
        alert("Your Current Total is " + this.bustCount())
        if(this.bustCount() > 21){
            alert("They Player Has Busted. Game Over")
        }
    }

    bustCount = () => {
        let cards = this.props.givenCards
        let hand = []
        let total = []
        let currentTotal = 0
        let aceAt = []
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
                aceAt.push(i)
            } else {
                total.push(parseInt(hand[i], 10))
            }
        }
        currentTotal = total[0] + total[1]
        total.shift()
        total.shift()
        total.shift()
        total.shift()
        for(let i = 0; total.length > i; i++){
            currentTotal += total[i]
        }
        if (currentTotal > 21 && aceAt.length > 0){
                total = []
                currentTotal = 0
                for (let i = 0; hand.length > i; i++){
                    if (hand[i] === "KING" || hand[i] === "QUEEN" || hand[i] === "JACK"){
                        total.push(10)
                    } else if (hand[i] === "ACE"){
                        total.push(1)
                    } else {
                        total.push(parseInt(hand[i], 10))
                    }
                }
            currentTotal = total[0] + total[1]
            total.shift()
            total.shift()
            total.shift()
            total.shift()
            for (let i = 0; total.length > i; i++){
                currentTotal += total[i]
            }
        }
        return currentTotal
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
                {this.playerTotal()}
            </div>
        )
    }
}

export default HitCard;

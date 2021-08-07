import React, { Component } from 'react';
import { connect } from 'react-redux'
import { fetchCards } from '../actions/fetchCards'
import { fetchAnotherCard } from '../actions/fetchAnotherCard'
import CardsArray from '../components/cardsArray';
import StandButton from '../components/StandButton';


class DeckContainer extends Component {
    
    componentDidMount() {
        this.props.fetchCards()
    }

    handleClick = () => { 
        this.props.fetchAnotherCard()
    }

    handleLoading = () => {
        if (this.props.cards.length !== 0) {
            console.log(this.props.cards.cards)
            return <CardsArray cards={this.props.cards} />
        }
    }

    renderHitButton = () =>{ 
        return(
            <button onClick={() => this.handleClick()}> Hit </button>
        )
    }

    render() {
        return (
            <div>
                {this.handleLoading()}
                <StandButton />
                {this.renderHitButton()}
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        cards: state.cards,
        newCard: state.cards
    }

}

export default connect(mapStateToProps, { fetchCards, fetchAnotherCard })(DeckContainer);

import React, { Component } from 'react';
import { connect } from 'react-redux'
import { fetchCards } from '../actions/fetchCards'
import { fetchDealerCards } from '../actions/fetchDealerCards';
import HitButton from '../components/HitButton.js';
import CardsArray from '../components/cardsArray';
import StandButton from '../components/StandButton';
import CurrentCardsTotal from '../components/CurrentCardsTotal';
import DealerCards from '../components/DealerCards';
import { current } from 'immer';


class DeckContainer extends Component {

    componentDidMount() {
        this.props.fetchCards()
        this.props.fetchDealerCards()
    }

    handleLoading = () => {
        if (this.props.cards.length !== 0) {
            console.log(this.props.cards.cards)
            return <CardsArray cards={this.props.cards} />
        }
    }

    handleLoadingDealer = () => {
        if (this.props.dealerCards.length !== 0) {
            console.log(this.props.cards.cards)
            return <DealerCards cards={this.props.dealerCards} />
        }
    }

    render() {
        debugger
        return (
            <div>
                <CurrentCardsTotal value={this.props.cards} />
                {this.handleLoading()}
                {this.handleLoadingDealer()}
                <StandButton />
                <HitButton />
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        cards: state.cards,
        dealerCards: state.cards
    }

}

export default connect(mapStateToProps, { fetchCards, fetchDealerCards })(DeckContainer);

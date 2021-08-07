import React, { Component } from 'react';
import { connect } from 'react-redux'
import { fetchCards } from '../actions/fetchCards'
import { fetchAnotherCard } from '../actions/fetchAnotherCard'
import { fetchDealerCards } from '../actions/fetchDealerCards';
import { fetchCards } from '../actions/fetchCards';
import CardsArray from '../components/cardsArray';
import AnotherCard from '../components/anotherCard';
import StandButton from '../components/StandButton';
import CurrentCardsTotal from '../components/CurrentCardsTotal';
import DealerCards from '../components/DealerCards';
import { current } from 'immer';


class DeckContainer extends Component {

    componentDidMount() {
        this.props.fetchCards()
        this.props.fetchDealerCards()
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

    handleHitCard = () => {
        if (this.props.newCard.length !== 0) {
            console.log(this.props.newCard.cards)
            return <AnotherCard cards={this.props.newCard} />
        }
    }

    renderHitButton = () => {
        return (
            <button onClick={() => this.handleClick()}> Hit </button>
        )
    }


    handleLoadingDealer = () => {
        if (this.props.dealerCards.length !== 0) {
            console.log(this.props.dealerCards.cards)
            return <DealerCards cards={this.props.dealerCards} />
        }
    }

    render() {
        return (
            <div>
                <CurrentCardsTotal value={this.props.cards} />
                {this.handleLoading()}
                {this.handleHitCard()}
                {this.handleLoadingDealer()}

                <StandButton />
                {this.renderHitButton()}
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        cards: state.cards,
        newCard: state.card,
        dealerCards: state.dealerCards
    }

}

export default connect(mapStateToProps, { fetchCards, fetchAnotherCard, fetchDealerCards })(DeckContainer);


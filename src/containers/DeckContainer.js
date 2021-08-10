import React, { Component } from 'react';
import { connect } from 'react-redux'
import { fetchDealerCards } from '../actions/fetchDealerCards';
import { fetchCards } from '../actions/fetchCards';
import { fetchAnotherCard } from '../actions/fetchAnotherCard';
import CardsArray from '../components/cardsArray';
import HitCard from '../components/HitCard';
import StandButton from '../components/StandButton';
import CurrentCardsTotal from '../components/CurrentCardsTotal';
import DealerCards from '../components/DealerCards';
//import { current } from 'immer';


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
        if (this.props.hitCard.length !== 0) {
            console.log(this.props.hitCard.cards)
            return <HitCard cards={this.props.hitCard} />
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
            return <DealerCards dcards={this.props.dealerCards} />
        }
    }

    render() {
        return (
            <div>
                <CurrentCardsTotal value={this.props.cards} />
                Dealer
                {this.handleLoadingDealer()}
                {this.props.name}
                {this.handleLoading()}
                {this.handleHitCard()}
                <StandButton />
                {this.renderHitButton()}
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        cards: state.cards,
        hitCard: state.hitCard,
        dealerCards: state.dealerCards
    }

}

export default connect(mapStateToProps, { fetchCards, fetchAnotherCard, fetchDealerCards })(DeckContainer);


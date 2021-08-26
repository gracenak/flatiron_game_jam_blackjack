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
import { sendCardInfo } from "../actions/sendCardInfo";
import NewHand from '../components/NewHand';
//import { current } from 'immer';


class DeckContainer extends Component {
    state = {
        cards: [],
        hitcards: [],
        dealerscard: [],
        added: false,
        reload: false
    }

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
            let newCard = this.state.hitcards
            console.log(this.props.hitCard.cards)
            newCard.push(this.props.hitCard)
            return <HitCard key={this.state.hitcards && this.state.hitcards.id} cards={this.state.hitcards} />
        }
    }

    handleRefresh = () => {
        window.location.reload();

    }

    renderHitButton = () => {
        return (
            <button onClick={() => this.handleClick()}> Hit </button>
        )
    }

    renderRefreshButton = () => {
        return (
            <button onClick={() => this.handleRefresh()}>Click to reload!</button>
        )
    }

    renderCurrentCardTotal = () => {
        let cardsInPlay = this.state.cards
        if (this.props.cards.length !== 0 && this.props.dealerCards.length !== 0 && this.state.added === false) {
            cardsInPlay.push(this.props.cards)
            cardsInPlay.push(this.props.dealerCards)
            this.setState({
                added: true
            })
        }
        if (this.props.hitCard.length !== 0) {
            cardsInPlay.push(this.props.hitCard)
        }
        return <CurrentCardsTotal cards={this.state.cards} />
    }

    handleLoadingDealer = () => {
        let dealersCards = this.state.dealerscard
        if (this.props.dealerCards.length !== 0) {
            console.log(this.props.dealerCards.cards)
            dealersCards.push(this.props.dealerCards.cards[0])
            return <DealerCards dcards={dealersCards[0]} />
        }

    }

    render() {
        return (
            <div className="blackjack-container">
                {this.renderCurrentCardTotal()}
                <h4>Dealer vs. {this.props.name}</h4>

                <h3>Dealer Cards:</h3>
                {this.handleLoadingDealer()}

                <h3>Player Cards:</h3>
                {this.handleLoading()}
                {this.handleHitCard()}
                <StandButton
                    cards={this.props.cards}
                    dealerCards={this.props.dealerCards}
                    hit={this.state.hitcards}
                />
                <NewHand
                    cards={this.props.cards}
                    dealerCards={this.props.dealerCards}
                />
                {this.renderHitButton()}
                {this.renderRefreshButton()}
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


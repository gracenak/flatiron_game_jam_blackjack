import React, { Component } from 'react';
import { connect } from 'react-redux'
import { fetchCards } from '../actions/fetchCards'
import HitButton from '../components/HitButton.js';
import CardsArray from '../components/cardsArray';
import StandButton from '../components/StandButton';


class DeckContainer extends Component {
    
    componentDidMount() {
        this.props.fetchCards()
    }

    handleLoading = () => {
        if (this.props.cards.length !== 0) {
            console.log(this.props.cards.cards)
            return <CardsArray cards={this.props.cards} />
        }
    }


    render() {
        return (
            <div>
                {this.handleLoading()}
                <StandButton />
                <HitButton/>
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        cards: state.cards
    }

}

export default connect(mapStateToProps, { fetchCards })(DeckContainer);

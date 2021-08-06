import React, { Component } from 'react';
import { connect } from 'react-redux'
import { fetchCards } from '../actions/fetchCards'
import CardsArray from '../components/cardsArray';

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

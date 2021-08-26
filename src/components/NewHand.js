import React from 'react';
import { fetchCards } from '../actions/fetchCards';
import { connect } from 'react-redux'

class NewHand extends React.Component {

    render() {
        return (
            <button>New Hand</button>
        )
    };
}

const mapStateToProps = state => {
    return {
        cards: state.cards,
        hitCard: state.hitCard,
        dealerCards: state.dealerCards
    }

}

export default connect(mapStateToProps, { fetchCards })(NewHand);

import React from 'react';
import { fetchCards } from '../actions/fetchCards';
import { connect } from 'react-redux'
// import cardsArray from './cardsArray';
import { fetchDealerCards } from '../actions/fetchDealerCards';

class NewHand extends React.Component {

    handleClick = () => {
        this.props.fetchCards()
        this.props.fetchDealerCards()
    }


    render() {
        return (
            <button onClick={() => this.handleClick()}> New Hand </button>
        )
    };
}

export default connect(null, { fetchCards, fetchDealerCards })(NewHand);
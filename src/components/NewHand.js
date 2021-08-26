import React from 'react';
import { fetchCards } from '../actions/fetchCards';
import { connect } from 'react-redux'
import cardsArray from './cardsArray';

class NewHand extends React.Component {

    state = {
        cards: [],

    }

    handleClick = () => {
        this.props.fetchCards()
    }


    render() {
        return (
            <button onClick={() => this.handleClick()}> New Hand </button>
        )
    };
}

const mapStateToProps = state => {
    return {
        cards: state.cards

    }

}

export default connect(mapStateToProps, { fetchCards })(NewHand);

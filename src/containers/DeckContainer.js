import React, { Component } from 'react';
import { connect } from 'react-redux'
import { fetchCards } from '../actions/fetchCards'
import cardsArray from '../components/cardsArray';

class DeckContainer extends Component {

    componentDidMount() {
        this.props.fetchCards()

    }

    render() {
        return (
            <div>
                <cardsArray />
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

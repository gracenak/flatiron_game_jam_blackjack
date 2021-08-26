import React from 'react';
import { fetchCards } from '../actions/fetchCards';
import { connect } from 'react-redux'

class NewHand extends React.Component {

    state = {
        cards: [],

    }

    componentDidMount() {
        this.props.fetchCards()

    }

    handleClick = () => {
        this.props.fetchCard()
    }

    render() {
        return (
            <button onClick={() => this.handleClick()}> New Hand </button>
        )
    };
}

const mapStateToProps = state => {
    return {
        cards: state.cards,

    }

}

export default connect(mapStateToProps, { fetchCards })(NewHand);

import React from 'react';
import { connect } from 'react-redux'
import { fetchAnotherCard } from '../actions/fetchAnotherCard'

 class HitButton extends React.Component {
    handleClick = () => { 
        this.props.fetchAnotherCard()
    }

    render(){
        return(
            <button onClick={() => this.handleClick()}> Hit </button>
        )
    }
 }

 const mapStateToProps = state => {
    return {
        cards: state.cards
    }

}

export default connect(mapStateToProps, { fetchAnotherCard })(HitButton);
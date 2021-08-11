import React from 'react';
import { connect } from 'react-redux'
import { fetchStand } from '../actions/fetchStand';

const StandButton = () => {


    handleClick = () => {
        this.fetchStand()

    };

    return (
        <button onClick={() => this.handleClick()}> Stand </button>
    );

}

export default connect(null, { fetchStand })(StandButton);

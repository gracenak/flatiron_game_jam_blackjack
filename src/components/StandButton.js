import React from 'react';
import { fetchStand } from '../actions/fetchStand';
import { connect } from 'react-redux'

class StandButton extends React.Component {

    handleClick = () => {
        this.props.fetchStand()
        //this.props.fetchStand(number?)
    }


    render() {
        return (
            <button onClick={() => this.handleClick()}>Stand</button>
        )
    };


}

const mapStateToProps = state => {

    return {
        stand: state.stand

    }

}

export default connect(mapStateToProps, { fetchStand })(StandButton);

//const mapDispatchToProps = dispatch => {
//    return {
//      I just wrote number for what we are sending, I'll be honest I wasn't sure if it was like a boolean or number to assess. Feel free to change
//      fetchStand: (number?) => {
//        dispatch(fetchStand(number?))
//      }
//    };
//  };
//  
//  export default connect(null, mapDispatchToProps)(StandButton);


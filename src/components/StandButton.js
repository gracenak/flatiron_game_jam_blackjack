import React from 'react';

class StandButton extends React.Component{
    handleClick = () => {
        alert("Yeah.... That's pretty much as close to 21 as I'll get")
        //this.props.fetchStand(number?)
    }

    render() {
    return (
        <button onClick={() => this.handleClick()}>Stand</button>
    )};
}

export default StandButton;

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
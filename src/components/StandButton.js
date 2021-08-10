import React from 'react';

class StandButton extends React.Component{
    handleClick = () => {
        //this.props.fetchStand()
        alert("Yeah.... That's pretty much as close to 21 as I'll get")
    }

    render() {
    return (
        <button onClick={() => this.handleClick()}>Stand</button>
    )};
}

export default StandButton;

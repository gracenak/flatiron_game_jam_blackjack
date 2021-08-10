import React from 'react';

class RefreshButton extends React.Component{
    handleClick = () => {
        alert("Refresh Button")
    }

    render() {
    return (
        <button onClick={() => this.handleClick()}>Refresh Button</button>
    )};
}

export default RefreshButton;
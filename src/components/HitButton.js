import React from 'react';

 class HitButton extends React.Component {
    handleClick = () => { 
        alert("Oi you hit the hit button")
    }

    render(){
        return(
            <button onClick={() => this.handleClick()}> Hit </button>
        )
    }
 }

 export default HitButton
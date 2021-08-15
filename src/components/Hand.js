import { Component } from 'react'

class Hand extends Component {

    state = {
        hand_value: 0
    }


    render() {

    return (
        <div>
            <h4>Player Hand Value:</h4>
            {this.renderScore}
            <h4>Dealer Hand Value:</h4>
            <p>{this.state.hand_value}</p>
            <button>HIT</button>
            <button>STAND</button>
        </div>
    )
    }
}

export default Hand
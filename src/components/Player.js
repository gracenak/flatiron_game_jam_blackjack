import { Component } from 'react'

class Player extends Component {

    state = {
        hand_value: 0
    }


    render() {

    return (
        <div>
            <h4>Player Hand Value:</h4>
            <h4>Dealer Hand Value:</h4>
            <p>{this.state.hand_value}</p>
            <button onClick = {() => this.setState({hand_value: this.state.hand_value + 1})} >HIT</button>
            <button>STAND</button>
        </div>
    )
    }
}

export default Player
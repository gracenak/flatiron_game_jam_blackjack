import React from 'react';
import { sendCardInfo } from "../actions/sendCardInfo";
import { connect } from 'react-redux'
import '../Cards.css'


class CurrentCardsTotal extends React.Component {
    handleCards() {
        alert(":^)")
    }


    render() {
        return (<div>
            <button onClick={() => this.handleCards()}>":^)"</button>
        </div>
        )
    }
}

const mapDispatchToProps = dispatch => {
    return {
        sendCardInfo: (entries) => {
            dispatch(sendCardInfo(entries))
        }
    };
};

export default connect(null, mapDispatchToProps)(CurrentCardsTotal);

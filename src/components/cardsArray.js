import React from 'react';
import { sendCardInfo } from "../actions/sendCardInfo";
import { connect } from 'react-redux'
import '../Cards.css'


class CardsArray extends React.Component {
    handleCardInfo(){
        const entries =  this.props.cards.cards
        this.props.sendCardInfo(entries)
    }


    render(){
        return (
        <div className="CardsMap">
            {this.props.cards.cards.map(cards =>
                <div className="Cards">
                    <ul key={cards.code}> {cards.value} of {cards.suit}</ul>
                    <img src={cards.image} alt={cards.code}/>
                </div>)}

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
  
  export default connect(null, mapDispatchToProps)(CardsArray);

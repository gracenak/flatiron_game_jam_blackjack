import React from 'react';
import { sendCardInfo } from "../actions/sendCardInfo";
import { connect } from 'react-redux'

class CurrentCardsTotal extends React.Component {
    
    handleCards = () => {
        debugger
    }

    render(){
        return (
            <div className={"TotalHandValue"}>
                Hand Value:
                {this.handleCards()}
            </div>
        );
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

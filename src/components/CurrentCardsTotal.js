import React from 'react';
import { sendCardInfo } from "../actions/sendCardInfo";
import { connect } from 'react-redux'

class CurrentCardsTotal extends React.Component {

    render(){
        return (
            <div className={"TotalHandValue"}>
                Hand Value:
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

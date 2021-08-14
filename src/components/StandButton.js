import React from 'react';
// import { connect } from 'react-redux'


const StandButton = () => {

    let HandleClick = () => {
        alert("No one wins yet");
    }

    return (
        <button onClick={() => HandleClick()}>Stand</button>
    )
};


export default StandButton;

// const mapStateToProps = state => {

//     return {
//         stand: state.stand

//     }

// }

// export default connect(mapStateToProps, { fetchStand })(StandButton);

import React, { Component } from 'react';
import { connect } from 'react-redux'

class DeckContainer extends Component {

    componentDidMount() {
        this.props.fetchCards()

    }



    render() {
        return (
            <div>



            </div>
        );
    }
}

const mapStateToProps = state => {
    return {

    }

}

export default connect(mapStateToProps, { fetchCards })(DeckContainer);

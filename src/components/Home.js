import React from 'react';
import DeckContainer from '../containers/DeckContainer';

class Home extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            name: "",
            ready: false
        };
        this.handleNameChange = this.handleNameChange.bind(this);
      }

    handleNameChange = (event) =>{
        this.setState({
            name: event.target.value
        });
    }

    handleSubmit = (event) =>{
        event.preventDefault();
        this.setState({
            ready: true
        });
    }

    renderGame = () =>{
        if (this.state.ready === true){
            return (
                <DeckContainer name={this.state.name} />
            );
        }
    }

    renderForm = () => {
        return (
            <form onSubmit={this.handleSubmit}>
                <label>
                    Enter Your Name:
                    <input type="text" value={this.state.name} onChange={this.handleNameChange} />
                </label>
                <input type="submit" value="Submit" />
            </form>
            
        );
    }

    render() {
        return (
            <div>
                {this.renderForm()}
                {this.renderGame()}
            </div>
        )
      }    
    }

export default Home;
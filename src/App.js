import React, { Component } from 'react';
import './App.css';
import RestCountries from './containers/RestCountries/RestCountries'

class App extends Component {
    render() {
        return (
            <div className="App">
                <RestCountries/>
            </div>
        );
    }
}

export default App;

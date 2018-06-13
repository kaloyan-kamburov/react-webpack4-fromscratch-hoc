import React, { Component } from 'react';
import Bla from './Bla';
import withToggle from '../common/withToggle';

const DecoratedBla = withToggle({showModal: false})(Bla)

class App extends Component {
    render() {
        return ( 
            <div>
                <h1>My React APps</h1>
                <DecoratedBla />
            </div>
        );
    }
}

export default App;

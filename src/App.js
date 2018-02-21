import React, {Component} from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';

import NASAInformationBuilder from './components/NASAInformationBuilder/NASAInformationBuilder';
import APoPByDate from './components/NASAInformationBuilder/APoDByDate/APoDByDate';

import './App.css';

class App extends Component {
    render() {
        return (
            <BrowserRouter>
                <div>
                    <Switch>
                        <Route path='/by-date' component={APoPByDate}/>
                        <Route path='/' component={NASAInformationBuilder}/>
                    </Switch>
                </div>
            </BrowserRouter>
        );
    }
}

export default App;

import React, {Component} from 'react';
import {Provider} from 'react-redux';
import {createStore, applyMiddleware} from 'redux'
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import reduxThunk from 'redux-thunk';
import axios from 'axios';
import reducers from './reducers/configReducers';

import NASAInformationBuilder from './components/NASAInformationBuilder/NASAInformationBuilder';
import APoPByDate from './components/NASAInformationBuilder/APoDByDate/APoDByDate';

import './App.css';

window.axios = axios;
const store = createStore(reducers, {}, applyMiddleware(reduxThunk));

class App extends Component {
    render() {
        return (
            <Provider store={store}>
                <BrowserRouter>
                    <div>
                        <Switch>
                            <Route path='/by-date' component={APoPByDate}/>
                            <Route path='/' component={NASAInformationBuilder}/>
                        </Switch>
                    </div>
                </BrowserRouter>
            </Provider>
        );
    }
}

export default App;

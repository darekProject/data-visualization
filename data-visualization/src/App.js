import React, {Component} from 'react';
import {Provider} from 'react-redux';
import {createStore, applyMiddleware} from 'redux'
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import promise from 'redux-promise';

import './App.css';
import reducers from './reducers/configReducers';
import NASAInformationBuilder from './components/NASAInformationBuilder/NASAInformationBuilder';

const createStoreWithMiddleware = applyMiddleware(promise)(createStore);

class App extends Component {
    render() {
        return (
            <Provider store={createStoreWithMiddleware(reducers)}>
                <BrowserRouter>
                    <div>
                        <Switch>
                            <Route path='/' component={NASAInformationBuilder}/>
                        </Switch>`
                    </div>
                </BrowserRouter>
            </Provider>
        );
    }
}

export default App;

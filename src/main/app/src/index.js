import React from 'react';
import './sass/App.css';
import {render} from 'react-dom';
import {HashRouter, Route} from 'react-router-dom';
import reducer from './components/search/reducers';
import {createStore} from 'redux';
import {Provider} from 'react-redux';
import Main from "./components/Main";


const store = createStore(reducer);

const routes = (
    <Provider store={store}>
        <HashRouter>
            <Route path="/" component={Main}/>
        </HashRouter>
    </Provider>
);

render(routes, document.getElementById('root'));
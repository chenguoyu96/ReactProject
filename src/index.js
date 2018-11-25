import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux'
import Root from "./Root";
import initStore from "./store";

let store = initStore();

ReactDOM.render(
    <Provider store={store}>
        <Root/>
    </Provider>, document.getElementById('root')
);
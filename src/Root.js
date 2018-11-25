import React, {Component} from 'react';
import {HashRouter, Route} from "react-router-dom";
import Login from "./login/Login";
import Home from "./home/Home";


class Root extends Component {
    render() {
        return (
            <HashRouter>
                <div className="main">
                    <Route exact path="/login" component={Login}/>
                    <Route exact path="/" component={Home}/>
                </div>
            </HashRouter>
        );
    }
}

export default Root;

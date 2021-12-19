/**
 * First we will load all of this project's JavaScript dependencies which
 * includes React and other helpers. It's a great starting point while
 * building robust, powerful web applications using React + Laravel.
 */
require('./bootstrap');
import React, {Component} from "react";
import {
    BrowserRouter as Router,
    Route,
    Switch,
} from "react-router-dom";

import Header from "./components/Header/Header";
import InputTodo from "./components/InputTodo/InputTodo";



/**
 * Next, we will create a fresh React component instance and attach it to
 * the page. Then, you may begin adding components to this application
 * or customize the JavaScript scaffolding to fit your unique needs.
 */
require('./components/Header/Header')
require('./components/Example');

export default class app extends Component {
    render(){
        return (
            <Router>
                <Header/>
                <Switch>
                    <Route exact path="/" component={InputTodo}/>
                </Switch>
            </Router>
        )
    }
}
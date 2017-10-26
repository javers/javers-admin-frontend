import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import {HashRouter as Router, Route, Switch, Redirect} from 'react-router-dom'
import {AppBar, Menu, MainLayout} from "./Layout";
import {AboutView, EntitiesView} from "./Views";

ReactDOM.render(
    <Router>
        <MainLayout toolbar={<AppBar handleMenuToggle={console.lgo}/>} sidebar={<Menu/>}>
            <Switch>
                <Route exact path="/">
                    <Redirect to={"/entities"}/>
                </Route>
                <Route path="/entities" component={EntitiesView}/>
                <Route exact path="/about" component={AboutView}/>
            </Switch>
        </MainLayout>
    </Router>, document.getElementById('root'));
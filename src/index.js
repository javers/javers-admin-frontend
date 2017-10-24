import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import {AppBar, Menu, MainLayout} from "./Layout";
import {AboutView, EntitiesView} from "./Views";

ReactDOM.render(
    <Router basename={process.env.PUBLIC_URL}>
        <MainLayout toolbar={<AppBar/>} sidebar={<Menu/>}>
            <Switch>
                <Route exact path="/" component={EntitiesView}/>
                <Route exact path="/entity/:entityId" component={EntitiesView}/>
                <Route path="/about" component={AboutView}/>
            </Switch>
        </MainLayout>
    </Router>, document.getElementById('root'));
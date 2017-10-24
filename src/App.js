import React, {Component} from 'react';
import './App.css';
import {AppBar, Menu} from "./Layout";
import MainLayout from "./Layout/MainLayout";
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import EntitiesView from "./Views/EntitiesView";
import AboutView from "./Views/AboutView";

class App extends Component {
    render() {
        return (
            <Router>
                <MainLayout toolbar={<AppBar/>} sidebar={<Menu/>}>
                    <Switch>
                        <Route exact path="/" component={EntitiesView}/>
                        <Route path="/about" component={AboutView}/>
                    </Switch>
                </MainLayout>
            </Router>
        );
    }
}

export default App;

import React from 'react';
import AppBar from 'material-ui/AppBar';
import Toolbar from 'material-ui/Toolbar';
import logo from './logo.svg';
import Hidden from "material-ui/Hidden/Hidden";
import MenuIcon from 'material-ui-icons/Menu';
import IconButton from "material-ui/IconButton";
import {withRouter} from "react-router-dom";

export default withRouter(({history, handleMenuToggle}) => {
    return (
        <AppBar position="fixed" color="default">
            <Toolbar>
                <Hidden mdUp>
                    <IconButton aria-label="open drawer" onClick={() => handleMenuToggle()}>
                        <MenuIcon/>
                    </IconButton>
                </Hidden>
                <img onClick={() => history.push('/')} alt="Javers Logo" style={{height: 24, cursor: 'pointer'}} src={logo}/>
            </Toolbar>
        </AppBar>
    );
});
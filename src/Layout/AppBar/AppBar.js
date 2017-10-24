import React from 'react';
import AppBar from 'material-ui/AppBar';
import Toolbar from 'material-ui/Toolbar';
import logo from './logo.svg';
import Hidden from "material-ui/Hidden/Hidden";
import MenuIcon from 'material-ui-icons/Menu';
import IconButton from "material-ui/IconButton";

export default () => {
    return (
        <AppBar position="fixed" color="default">
            <Toolbar>
                <Hidden mdUp>
                    <IconButton aria-label="open drawer">
                        <MenuIcon/>
                    </IconButton>
                </Hidden>
                <img alt="Javers Logo" style={{height: 24}} src={logo}/>
            </Toolbar>
        </AppBar>
    );
}
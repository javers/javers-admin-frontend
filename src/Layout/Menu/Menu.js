import React from 'react';
import List, {ListItem, ListItemIcon, ListItemText} from 'material-ui/List';
import UserInfo from "./UserInfo/UserInfo";
import FaceIcon from 'material-ui-icons/Face';
import ActionInfo from 'material-ui-icons/Info';
import {withRouter} from "react-router-dom";
import './Menu.css';

export default withRouter(({history, handleMenuToggle}) => {

    const goTo = function (link) {
        if (history.location.pathname !== link) history.push(link);
        if (handleMenuToggle) handleMenuToggle();
    };

    return (
        <div className="menu-drawer-container">
            <UserInfo/>
            <List className="menu-drawer">
                <ListItem className="header">Main navigation</ListItem>
                <ListItem button onClick={() => goTo('/entities')}>
                    <ListItemIcon>
                        <FaceIcon/>
                    </ListItemIcon>
                    <ListItemText primary="Entites"/>
                </ListItem>
                <ListItem button onClick={() => goTo('/about')}>
                    <ListItemIcon>
                        <ActionInfo/>
                    </ListItemIcon>
                    <ListItemText primary="About"/>
                </ListItem>
            </List>
        </div>
    );
});
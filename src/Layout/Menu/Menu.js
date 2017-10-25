import React from 'react';
import List, {ListItem, ListItemIcon, ListItemText} from 'material-ui/List';
import UserInfo from "./UserInfo/UserInfo";
import FaceIcon from 'material-ui-icons/Face';
import ActionInfo from 'material-ui-icons/Info';
import './Menu.css';
import {withRouter} from "react-router-dom";

export default withRouter((props) => {
    return (
        <div className="menu-drawer-container">
            <UserInfo/>
            <List className="menu-drawer">
                <ListItem className="header">Main navigation</ListItem>
                <ListItem button onClick={() => props.history.push('/entities')}>
                    <ListItemIcon>
                        <FaceIcon/>
                    </ListItemIcon>
                    <ListItemText primary="Entites"/>
                </ListItem>
                <ListItem button onClick={() => props.history.push('/about')}>
                    <ListItemIcon>
                        <ActionInfo/>
                    </ListItemIcon>
                    <ListItemText primary="About"/>
                </ListItem>
            </List>
        </div>
    );
});
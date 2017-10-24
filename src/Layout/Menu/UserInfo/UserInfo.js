import React from 'react';
import './UserInfo.css';
import Avatar from "material-ui/Avatar";

export default () => {
    return (
        <div className="user-info">
            <Avatar style={{width: 48, height: 48}} alt="User" src=""/>
            <p>John Doe<br/>
                <small>john.doe@example.com</small>
            </p>
        </div>
    );
}
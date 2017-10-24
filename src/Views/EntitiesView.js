import React from 'react';
import {Typography} from "material-ui";
import {EntityBrowser} from "../Components";

export default () => {
    return (
        <div>
            <Typography type="title">Entities</Typography>
            <br/>
            <EntityBrowser/>
        </div>
    );
}
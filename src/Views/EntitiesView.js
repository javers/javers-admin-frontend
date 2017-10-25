import React from 'react';
import {Typography} from "material-ui";
import {EntityBrowser} from "../Components";
import {Route, Switch} from 'react-router-dom'
import ObjectBrowser from "../Components/EntityBrowser/ObjectBrowser";

export default () => {
    return (
        <div>
            <Typography type="title">Entities</Typography>
            <br/>
            <Switch>
                <Route path="/entities/:id" render={(props) => <ObjectBrowser entityId={props.match.params.id}/>}/>
                <Route>
                    <EntityBrowser/>
                </Route>
            </Switch>
        </div>
    );
};
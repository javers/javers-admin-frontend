import React from 'react';
import {Typography} from "material-ui";
import {EntityList} from "../Components";
import {Route, Switch} from 'react-router-dom'
import ObjectBrowser from "../Components/EntityBrowser/ObjectsList";

export default () => {
    return (
        <div>
            <Typography type="title">Entities</Typography>
            <br/>
            <Switch>
                <Route path="/entities/:id" render={(props) => <ObjectBrowser entityId={props.match.params.id}/>}/>
                <Route>
                    <EntityList/>
                </Route>
            </Switch>
        </div>
    );
};
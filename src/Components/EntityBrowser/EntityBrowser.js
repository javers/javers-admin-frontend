import React, {Component} from 'react';
import Grid from 'material-ui/Grid';
import Card, {CardContent, CardHeader} from "material-ui/Card";
import Typography from "material-ui/Typography";
import axios from 'axios';
import ObjectBrowser from "./ObjectBrowser";

export default class EntityBrowser extends Component {

    state = {
        entities: [],
        selectedEntityId : null
    };

    componentDidMount() {
        axios.get('api/entities').then((response) => {
            this.setState({entities: response.data});
        }).catch((error) => {
            console.error(error);
        });
    }

    render() {
        if (this.state.selectedEntityId) {
            return <ObjectBrowser entityId={this.state.selectedEntityId}/>
        }

        const cards = this.state.entities.map(this.toCard());
        return (
            <Grid container>
                {cards}
            </Grid>
        );
    }

    toCard() {
        return entity =>
            <Grid item xs key={entity.id}>
                <Card onClick={() => this.setState({selectedEntityId: entity.id})}>
                    <CardHeader title={entity.name}/>
                    <CardContent>
                        <Typography type="body1">
                            count: {entity.count}
                        </Typography>
                        <Typography type="body1">
                            snapshots: {entity.snapshots}
                        </Typography>
                    </CardContent>
                </Card>
            </Grid>;
    }
}
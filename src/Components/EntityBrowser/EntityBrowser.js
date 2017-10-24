import React, {Component} from 'react';
import Grid from 'material-ui/Grid';
import Card, {CardContent, CardHeader} from "material-ui/Card";
import Typography from "material-ui/Typography";
import axios from 'axios';

export default class EntityBrowser extends Component {

    state = {
        entities: []
    };

    componentDidMount() {
        axios.get('api/entities').then((response) => {
            this.setState({entities: response.data});
        }).catch((error) => {
            console.error(error);
        });
    }

    render() {
        const cards = this.state.entities.map(this.toCard());
        return (
            <Grid container>
                {cards}
            </Grid>
        );
    }

    toCard() {
        console.log(this.context);
        return entity =>
            <Grid item xs key={entity.id}>
                <Card onClick={() => console.log(entity.name)}>
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
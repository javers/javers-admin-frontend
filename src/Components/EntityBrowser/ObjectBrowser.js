import React, {Component} from 'react';
import Grid from 'material-ui/Grid';
import Card, {CardContent, CardHeader, CardActions} from "material-ui/Card";
import Typography from "material-ui/Typography";
import axios from 'axios';
import moment from 'moment';
import PropTypes from 'prop-types';
import Table, { TableBody, TableCell, TableHead, TableRow } from 'material-ui/Table';

export default class ObjectBrowser extends Component {

    static propTypes: {
        entityId: PropTypes.string.isRequired
    };

    state = {
        objects: []
    };

    componentDidMount() {
        axios.get(`api/entities/${this.props.entityId}/`).then((response) => {
            this.setState({objects: response.data});
        }).catch((error) => {
            console.error(error);
        });
    }

    render() {
        return (
            <Grid container>
                {this.state.objects.map(this.toCard())}
            </Grid>
        );
    }

    toCard() {
        return object =>
            <Grid item xs key={object.globalId.cdoId}>
                <Card>
                    <CardHeader title={object.globalId.cdoId}/>
                    <CardContent>
                        <Table>
                            <TableHead>
                                <TableRow>
                                    <TableCell>Property</TableCell>
                                    <TableCell>Value</TableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                {Object.keys(object.state).map(key => {
                                    return (
                                        <TableRow key={key}>
                                            <TableCell>{key}</TableCell>
                                            <TableCell>{object.state[key]}</TableCell>
                                        </TableRow>
                                    );
                                })}
                            </TableBody>
                        </Table>
                    </CardContent>
                    <CardActions>
                        <Typography type="body1">
                            <strong>{object.commitMetadata.author}</strong>&nbsp;
                            modified {moment(object.commitMetadata.commitDate).fromNow()}
                        </Typography>
                    </CardActions>

                </Card>
            </Grid>;
    }
}
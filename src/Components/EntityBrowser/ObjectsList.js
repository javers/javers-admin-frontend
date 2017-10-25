import React, {Component} from 'react';
import Grid from 'material-ui/Grid';
import Card, {CardContent, CardHeader, CardActions} from "material-ui/Card";
import axios from 'axios';
import PropTypes from 'prop-types';
import Table, {TableBody, TableCell, TableHead, TableRow} from 'material-ui/Table';
import ObjectMetadata from "./ObjectMetadata";
import './ObjectList.css';

export default class ObjectBrowser extends Component {

    static propTypes: {
        entityId: PropTypes.string.isRequired
    };

    state = {
        objects: []
    };

    componentDidMount() {
        axios.get(`${process.env.PUBLIC_URL}/api/entities/${this.props.entityId}/`).then((response) => {
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
                <Card className="entity-object">
                    <CardHeader title={`id: ${object.globalId.cdoId}`}/>
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
                                            <TableCell><strong>{key}</strong></TableCell>
                                            <TableCell>{JSON.stringify(object.state[key])}</TableCell>
                                        </TableRow>
                                    );
                                })}
                            </TableBody>
                        </Table>
                    </CardContent>
                    <ObjectMetadata author={object.commitMetadata.author}
                                    commitDate={object.commitMetadata.commitDate}
                    />
                </Card>
            </Grid>;
    }
}
import React, {Component} from 'react';
import Grid from 'material-ui/Grid';
import Card, {CardContent} from "material-ui/Card";
import axios from 'axios';
import PropTypes from 'prop-types';
import Table, {TableBody, TableCell, TableHead, TableRow} from 'material-ui/Table';
import ObjectMetadata from "./ObjectMetadata";
import './ObjectList.css';
import {Link, withRouter} from "react-router-dom";

class ObjectList extends Component {

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
            <Grid container alignContent="stretch">
                {this.state.objects.map(this.toCard())}
            </Grid>
        );
    }

    toCard() {
        return object =>
            <Grid item xs key={object.globalId.cdoId}>
                <Card className="entity-object">
                    <div className="entity-object__id">
                        <span>id: <strong>{object.globalId.cdoId}</strong></span>
                    </div>
                    <CardContent className="entity-object__properties">
                        <Table className="entity-object__properties__table">
                            <TableHead>
                                <TableRow className="entity-object__properties__table__row">
                                    <TableCell>Property</TableCell>
                                    <TableCell>Value</TableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                {Object.keys(object.state).map(key => {
                                    return (
                                        <TableRow key={`${object.commitMetadata.commitId}-${key}`}
                                                  className="entity-object__properties__table__row">
                                            <TableCell><strong>{key}</strong></TableCell>
                                            <TableCell>{typeof(object.state[key]) === 'object' ?
                                                <ul>{this.extractEntity(object.state[key], object.globalId.cdoId)}</ul> : object.state[key]}</TableCell>
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

    extractEntity(value) {
        if (Array.isArray(value)) {
            return value.map(it => this.extractEntity(it));
        }
        return (
            <li>
                <Link to={`/entities/${value.entity}/${value.cdoId}`}>{value.cdoId}</Link>
            </li>
        );
    }
}

export default withRouter(ObjectList);
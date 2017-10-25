import React from 'react';
import Typography from "material-ui/Typography";
import moment from 'moment';

export default ({author, commitDate}) => {
    return (
        <Typography type="body1" className="entity-object__metadata">
            <strong>{author}</strong>&nbsp;modified {moment(commitDate).fromNow()}
        </Typography>
    );
};
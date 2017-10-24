import React, {Component} from 'react';
import PropTypes from 'prop-types';
import Hidden from "material-ui/Hidden/Hidden";
import './MainLayout.css';

export default class MainLayout extends Component {
    static propTypes: {
        toolbar: PropTypes.object,
        sidebar: PropTypes.object
    };

    render() {
        return (
            <div id="main-layout">
                {this.props.toolbar}
                <div className="main-layout__container">
                    <Hidden smDown>
                        <div className="main-layout__sidebar">
                            {this.props.sidebar}
                        </div>
                    </Hidden>
                    <div className="main-layout__content">
                        {this.props.children}
                    </div>
                </div>
            </div>
        );
    }
}
import React, {Component} from 'react';
import PropTypes from 'prop-types';
import Hidden from "material-ui/Hidden/Hidden";
import './MainLayout.css';
import Drawer from 'material-ui/Drawer';

export default class MainLayout extends Component {

    state = {
        drawerOpen: false
    };

    static propTypes: {
        toolbar: PropTypes.object,
        sidebar: PropTypes.object
    };

    render() {
        const toolbar = React.cloneElement(this.props.toolbar, {handleMenuToggle: () => this.setState({drawerOpen: true})});
        const sidebar = React.cloneElement(this.props.sidebar, {handleMenuToggle: () => this.setState({drawerOpen: false})});
        return (
            <div id="main-layout">
                {toolbar}
                <div className="main-layout__container">
                    <Hidden smDown>
                        <div className="main-layout__sidebar">
                            {this.props.sidebar}
                        </div>
                    </Hidden>
                    <Hidden smUp>
                        <Drawer
                            type="temporary"
                            anchor="left"
                            open={this.state.drawerOpen}
                            onRequestClose={() => this.setState({drawerOpen: false})}
                            ModalProps={{keepMounted: true}}
                        >
                            <div className="main-layout__sidebar">
                                {sidebar}
                            </div>
                        </Drawer>
                    </Hidden>
                    <div className="main-layout__content">
                        {this.props.children}
                    </div>
                </div>
            </div>
        );
    }
}
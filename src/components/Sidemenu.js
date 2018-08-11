import React from 'react';
import Drawer from '@material-ui/core/Drawer';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import { withStyles } from '@material-ui/core/styles';
import PropTypes from 'prop-types';
import SidemenuContents from './SidemenuContents';

const styles = theme => ({
    root: {
        flexGrow: 1,
    },
    drawerPaper: {
        position: 'relative',
        width: theme.size.sidemenu.width,
    },
    drawerHeader: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'flex-end',
        padding: '0 8px',
        ...theme.mixins.toolbar,
    }
});

class Sidemenu extends React.Component {
    constructor(props) {
        super(props);

        this.handleOpen = this.handleOpen.bind(this);
        this.handleClose = this.handleClose.bind(this);
    }

    handleOpen() {
        this.props.onOpen();
    }

    handleClose() {
        this.props.onClose();
    }

    render() {
        const { classes, open } = this.props;

        return (
            <div className="sidemenu" className={classes.root}>
                <Drawer
                    variant="persistent"
                    anchor="left"
                    open={open}
                    classes={{
                        paper: classes.drawerPaper
                    }}
                >
                    <div className={classes.drawerHeader}>
                        <IconButton onClick={this.handleClose}>
                            <ChevronLeftIcon />
                        </IconButton>
                    </div>
                    <Divider />
                    <SidemenuContents />
                </Drawer>
            </div>
        );
    }
}

Sidemenu.propTypes = {
    classes: PropTypes.object.isRequired,
    theme: PropTypes.object.isRequired,
    onOpen: PropTypes.func.isRequired,
    onClose: PropTypes.func.isRequired,
}

export default withStyles(styles, { withTheme: true })(Sidemenu);

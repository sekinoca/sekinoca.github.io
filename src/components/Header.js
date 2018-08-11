import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';

const styles = theme => ({
    root: {
        flexGrow: 1,
        zIndex: 1,
        overflow: 'hidden',
        width: '100%',
    },
    flex: {
        flexGrow: 1,
    },
    hide: {
        display: 'none',
    },
    header: {
        position: 'absolute',
    },
    headerShift: {
        marginLeft: theme.size.sidemenu.width,
        width: `calc(100% - ${theme.size.sidemenu.width}px)`
    },
    menuButton: {
        marginRight: 22,
    }
});

class Header extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            auth: true,
        }
        this.handleOpenSidemenu = this.handleOpenSidemenu.bind(this);
    }

    handleOpenSidemenu() {
        this.props.onOpenSidemenu();
    }

    render() {
        const { classes, sidemenu } = this.props;

        return (
            <div className={classes.root}>
                <AppBar
                    position="static"
                    className={
                        classNames(classes.header, {
                            [classes.headerShift]: sidemenu
                        })
                    }
                >
                    <Toolbar>
                        <IconButton
                            color="inherit"
                            onClick={this.handleOpenSidemenu}
                            className={classNames(
                                classes.menuButton,
                                sidemenu && classes.hide,
                            )}
                        >
                            <MenuIcon />
                        </IconButton>
                        <Typography
                            variant="title"
                            color="inherit"
                            className={classes.flex}
                        >
                            sekinoca.github.io
                        </Typography>
                    </Toolbar>
                </AppBar>
            </div>
        );
    }
}

Header.propTypes = {
    classes: PropTypes.object.isRequired,
    sidemenu: PropTypes.bool.isRequired,
    onOpenSidemenu: PropTypes.func.isRequired,
};

export default withStyles(styles, { withTheme: true })(Header);

import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import '@fortawesome/fontawesome-free/js/all.min.js';

const styles = theme => ({
    root: {
        flexGrow: 1,
    },
    toolbar: theme.mixins.toolbar,
    content: {
        flexGrow: 1,
        backgroundColor: theme.palette.background.default,
        padding: theme.spacing.unit * 3,
        position: 'absolute',
        top: 0,
    },
    contentShift: {
        marginLeft: theme.size.sidemenu.width,
    },
    section: {
        paddingBottom: theme.spacing.unit * 3,
    },
    headline: {
    },
    body: {
        marginLeft: theme.spacing.unit * 4,
    },
    button: {
        marginRight: theme.spacing.unit,
    },
    icon: {
        marginLeft: theme.spacing.unit,
    },
});

class Content extends React.Component {
    render() {
        const { classes, sidemenu } = this.props;
        return (
            <div className={classes.root}>
                <main
                    className={
                        classNames(classes.content, {
                            [classes.contentShift]: sidemenu,
                        })
                    }
                >
                    <div className={classes.toolbar} />
                    <div className={classes.section}>
                        <Typography
                            variant="headline"
                            className={classes.headline}
                        >
                            Profile
                        </Typography>
                        <Typography
                            variant="body1"
                            className={classes.body}>
                            Name: sekinoca<br />
                            Age: 21<br />
                            Like: Watching movies<br />
                            Language: Node.js, Golang<br />
                        </Typography>
                    </div>
                    <div className={classes.section}>
                        <Typography
                            variant="headline"
                            className={classes.headline}
                        >
                            Products
                        </Typography>
                        <Typography
                            variant="body1"
                            className={classes.body}
                        >
                            Yet.
                        </Typography>
                    </div>
                    <div className={classes.section}>
                        <Typography
                            variant="headline"
                            className={classes.headline}
                        >
                            Links
                        </Typography>
                        <Typography
                            variant="body1"
                            className={classes.body}
                        >
                            <Button
                                variant="contained"
                                color="primary"
                                className={classes.button}
                                href="https://github.com/sekinoca"
                                target="_blank"
                                rel="noopener"
                            >
                                GitHub<i className={`fab fa-github ${classes.icon}`} />
                            </Button>
                            <Button
                                variant="contained"
                                color="primary"
                                className={classes.button}
                                href="https://twitter.com/sekinoca"
                                target="_blank"
                                rel="noopener"
                            >
                                Twitter<i className={`fab fa-twitter ${classes.icon}`} />
                            </Button>
                            <Button
                                variant="contained"
                                color="primary"
                                className={classes.button}
                                href="https://qiita.com/sekinoca"
                                target="_blank"
                                rel="noopener"
                            >
                                Qiita
                            </Button>
                        </Typography>
                    </div>
                    <div className={classes.section}>
                        <Typography
                            variant="headline"
                            className={classes.headline}
                        >
                            Contact
                        </Typography>
                        <Typography
                            variant="body1"
                            className={classes.body}
                        >
                            <Button
                                variant="text"
                                color="primary"
                                className="twitter-mention-button"
                                href="https://twitter.com/intent/tweet?screen_name=sekinoca&ref_src=twsrc%5Etfw"
                                target="_blank"
                                rel="noopener"
                            >
                                To my twitter
                            </Button>
                        </Typography>
                    </div>
                </main>
            </div>
        );
    }
}

Content.propTypes = {
    classes: PropTypes.object.isRequired,
    sidemenu: PropTypes.bool.isRequired,
}

export default withStyles(styles)(Content);

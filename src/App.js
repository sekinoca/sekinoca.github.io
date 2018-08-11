import React from 'react';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import HeaderContainer from './containers/HeaderContainer';
import SidemenuContainer from './containers/SidemenuContainer';
import ContentContainer from './containers/ContentContainer';

const theme = createMuiTheme({
    size: {
        sidemenu: {
            width: 240,
        }
    }
});

class App extends React.Component {
    render() {
        return (
            <MuiThemeProvider theme={theme}>
                <CssBaseline />
                <HeaderContainer />
                <SidemenuContainer />
                <ContentContainer />
            </MuiThemeProvider>
        );
    }
}

export default App;

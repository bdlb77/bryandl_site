import React, { Component } from 'react';
import './App.scss';
import Content from './components/content/Content';
import ButtonAppBar from './components/navbar/Navbar';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';


const theme = createMuiTheme({
	typography: {
  	useNextVariants: true,
  },
  palette: {
    type: 'dark',
    primary: {
      light: '#4f5b62',
      main: '#263238',
      dark: '#000a12',
      contrastText: '#fff',
    },
    secondary: {
      light: '#5472d3',
      main: '#0d47a1',
      dark: '#002171',
      contrastText: '#fff',
    },
    type: 'dark',
  },
});

class App extends Component {
  render() {
    return (    
    	<MuiThemeProvider theme={theme}>
        <CssBaseline />
	      <div className="App">
	        <ButtonAppBar />
	        <Content />
      	</div>
      </MuiThemeProvider>
    );
  }
}

export default App;

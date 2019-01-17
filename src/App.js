import React, { Component } from 'react';
import { Helmet } from "react-helmet";

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
          <Helmet>
            <title>BL | Bryan Leighton</title>
            <meta name="og:title" content="Bryan Leighton | Full Stack Developer"/>
            <meta name="og:description" content="Freelance Full Stack Developer Based in Berlin" />
            <meta name="og:image" content="%PUBLIC_URL%/bryan_logo.png" />
            <meta name="og:type" content="website"/>
            <meta name="og:site_name" content="Bryan Leighton | Full Stack Developer"/>
            <meta name="og:url" content="https://bryandl.com"/>
            <link rel="canonical" href="http://bryandl.com/" />
            <meta name="theme-color" content="#000000" />
          </Helmet>
	        <ButtonAppBar />
	        <Content />
      	</div>
      </MuiThemeProvider>
    );
  }
}

export default App;

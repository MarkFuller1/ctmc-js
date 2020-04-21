import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from "react-router-dom";
import App from './App.jsx';
import { ThemeProvider } from '@material-ui/styles';
import {createMuiTheme, CssBaseline} from '@material-ui/core';

export const PRIMARY = "#363333";   
export const SECONDARY = "#272121"; 

export const theme = createMuiTheme({
    palette: {
        primary: {
            main: PRIMARY,
            contrastText: "#E16428"
        },
        secondary: {
            main: SECONDARY
        },
        error: {
            main: "#ffffff"
        }
    }
});


ReactDOM.render(
    <BrowserRouter style={{backgroundColor: "#363333"}}>
        <ThemeProvider theme={theme}>
            <CssBaseline />
            <App />
        </ThemeProvider>
    </BrowserRouter>
    , document.getElementById('root'));



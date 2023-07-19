import './CustomToolBar.css';
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import {Link} from "react-router-dom";
import shamirLogoPath from "../../Public/HomePage/ShamirLogo.png";
import {createTheme, ThemeProvider} from "@mui/material/styles";
import * as React from "react";
import AppBar from "@mui/material/AppBar";
import HomeIcon from '@mui/icons-material/Home';
import Typography from "@mui/material/Typography";

const CustomToolbar = ({toolbarTitle}) => {
    const appBarLabel = (
        <Toolbar className="toolbar">
            <IconButton
                id="HomeButton"
                component={Link}
                to="/"
                aria-label="homePage"
            >
                <HomeIcon />
            </IconButton>
            <Typography id="ToolbarTitle" variant="h6" noWrap={false} component="div">
                {toolbarTitle || '\u00A0'}
            </Typography>
            <img src={shamirLogoPath} id="ShamirLogo" alt="Shamir" />
        </Toolbar>
    );

    const darkTheme = createTheme({
        palette: {
            mode: 'dark',
            primary: {
                main: '#1976d2',
            },
        },
    });

    return (
        <ThemeProvider theme={darkTheme}>
            <AppBar position="static" color="primary" enableColorOnDark className="toolbar-container">
                {appBarLabel}
            </AppBar>
        </ThemeProvider>
    )
}

export default CustomToolbar;

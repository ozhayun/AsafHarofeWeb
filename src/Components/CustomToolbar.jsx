import './CustomToolBar.css';
import {SoundContext} from "../Sound/SoundContext";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import VolumeUpIcon from '@mui/icons-material/VolumeUp';
import VolumeMuteIcon from '@mui/icons-material/VolumeMute';
import {Link} from "react-router-dom";
import shamirLogoPath from "../../Public/HomePage/ShamirLogo.png";
import {createTheme, ThemeProvider} from "@mui/material/styles";
import * as React from "react";
import AppBar from "@mui/material/AppBar";
import HomeIcon from '@mui/icons-material/Home';
import Typography from "@mui/material/Typography";
import {useContext} from "react";

const CustomToolbar = ({toolbarTitle}) => {
    const { playClickSound, toggleMute, isMuted } = useContext(SoundContext);

    const handleHomeButtonClick = () => {
        playClickSound();
    }


    const appBarLabel = (
        <Toolbar className="toolbar">
            <div className="left-container">
                <IconButton
                    id="HomeButton"
                    component={Link}
                    to="/"
                    aria-label="homePage"
                    onClick={handleHomeButtonClick}
                >
                    <HomeIcon fontSize="large" />
                </IconButton>
                <IconButton id="SoundButton" onClick={toggleMute}>
                    {isMuted ? <VolumeMuteIcon fontSize="large"/> : <VolumeUpIcon fontSize="large"/>}
                </IconButton>
            </div>
            <Typography id="ToolbarTitle" variant="h6" noWrap={false} component="div">
                {toolbarTitle}
            </Typography>
            <div className="right-container">
                <img src={shamirLogoPath} id="ToolBarShamirLogo" alt="Shamir" />
            </div>
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

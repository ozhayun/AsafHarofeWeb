import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import { Link } from 'react-router-dom';
import HomeIcon from '@mui/icons-material/Home.js';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Stack from '@mui/material/Stack';
import shamirLogoPath from '../../../Public/HomePage/ShamirLogo.png';
import {Label} from "@mui/icons-material";
import Typography from "@mui/material/Typography";
import ThermometerImagePath from "../../../Public/HomePage/Thermometer.png";
import PlasterImagePath from "../../../Public/HomePage/Plaster.png";
import {useState} from "react";

const ChoosePain = () => {
    function appBarLabel() {
        return (
            <Toolbar sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <IconButton
                    id="HomeButton"
                    component={Link}
                    to="/"
                    aria-label="homePage"
                >
                    <HomeIcon />
                </IconButton>
                <div>
                    <img src={shamirLogoPath} id="ShamirLogo" alt="Shamir" style={{ width: '100%', maxWidth: '100px' }} />
                </div>
            </Toolbar>
        );
    }


    const darkTheme = createTheme({
        palette: {
            mode: 'dark',
            primary: {
                main: '#1976d2',
            },
        },
    });

    const [selectedAnimal, setSelectedPain] = useState("");

    const handlePainClick = (pain) => {
        setSelectedPain(pain);
    }

    return (
        <div>
            <Stack spacing={2} sx={{ flexGrow: 1 }}>
                    <AppBar position="static" color="primary" enableColorOnDark>
                        {appBarLabel()}
                    </AppBar>
                <Typography id = "Title" variant="h2" gutterBottom>
                    מה כואב לחיה?
                </Typography>
                <div className='rectanglePain'>
                    <button className="piece cut" onClick={() => handlePainClick('cut')} data-selected={selectedAnimal === 'dog' ? 'true' : 'false'}>
                        <img src={ThermometerImagePath} style={{width: "100%", height: "100%"}} alt="Dog" />
                    </button>
                    <button className="piece fiver" onClick={() => handlePainClick('fiver')} data-selected={selectedAnimal === 'lion' ? 'true' : 'false'}>
                        <img src={PlasterImagePath} style={{width: "100%", height: "100%"}} alt="Lion" />
                    </button>
                </div>
            </Stack>
        </div>
    );
}

export default ChoosePain;

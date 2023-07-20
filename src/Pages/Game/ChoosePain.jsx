import './ChoosePain.css'
import * as React from 'react';
import './ChoosePain.css';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import { Link } from 'react-router-dom';
import HomeIcon from '@mui/icons-material/Home.js';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Typography from "@mui/material/Typography";
import ThermometerImagePath from "../../../Public/HomePage/Thermometer.png";
import PlasterImagePath from "../../../Public/HomePage/Plaster.png";
import {useState} from "react";


const ChoosePain = () => {
    const [selectedPain, setSelectedPain] = useState("");
    const navigate = useNavigate('/choose-pain');

    function appBarLabel() {
        return (
            <Toolbar sx={{maxWidth: 390, display: 'flex', justifyContent: 'space-between', alignItems: 'center'}}>
                <div>
                    <IconButton
                        id="HomeButton"
                        component={Link}
                        to="/"
                        aria-label="homePage"
                        sx={{marginRight: 'auto'}}
                    >
                        <HomeIcon/>
                    </IconButton>
                </div>
                <div>
                    {/* Adjust the 'width' and 'height' properties to change the image size */}
                    <img src={shamirLogoPath} id="ShamirLogo" alt="Shamir"
                         style={{width: '20%', height: '20%', marginRight: 'auto'}}/>
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

    const handlePainClick = (pain) => {
        setSelectedPain(pain);
    }

    const handleContinueClick = () => {
        if(selectedPain) {
            navigate('/start-board');
        }
    }

    return (
        <div className="container">
            <div className="toolbar-container">
                <CustomToolbar toolbarTitle=""/>
            </div>
                <Typography id = "Title" variant="h2" gutterBottom style={{ direction: 'rtl' }}>
                    מה כואב לחיה?
                </Typography>
                <div className='rectanglePain'>
                    <Button className="piece" onClick={() => handlePainClick('fiver')}
                            data-selected={selectedPain === 'fiver' ? 'true' : selectedPain === "" ? 'default' : 'false'}>
                        <img src={ThermometerImagePath} style={{width: "100%", height: "100%"}} alt="Thermometer"/>
                        ?יש לה חום
                    </Button>
                    <Button className="piece" onClick={() => handlePainClick('cut')}
                            data-selected={selectedPain === 'cut' ? 'true' : selectedPain === "" ? 'default' : 'false'}>
                        <img src={PlasterImagePath} style={{width: "100%", height: "100%"}} alt="Plaster"/>
                        ?יש לה חתך
                    </Button>
                </div>
                <Button id="ContinueButton" disabled={selectedPain === null} onClick={handleContinueClick}>
                    המשך
                </Button>
            </div>
    );
}

export default ChoosePain;

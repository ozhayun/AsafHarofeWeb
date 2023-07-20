import './ChoosePain.css'
import * as React from 'react';
import Typography from "@mui/material/Typography";
import ThermometerImagePath from "../../../Public/HomePage/Thermometer.png";
import PlasterImagePath from "../../../Public/HomePage/Plaster.png";
import {useState} from "react";
import CustomToolbar from '../../Components/CustomToolbar.jsx';
import {Button} from "@mui/material";
import {useNavigate} from "react-router";
import {useLocation} from "react-router-dom";

const ChoosePain = () => {
    const [selectedPain, setSelectedPain] = useState("");
    const navigate = useNavigate();
    const location = useLocation();
    const { animal } = location.state || {};

    const handlePainClick = (pain) => {
        setSelectedPain(pain);
    }

    const handleContinueClick = () => {
        if(selectedPain) {
            navigate('/game', { state: { pain: selectedPain, animal: animal } });
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
                <Button className="piece" onClick={() => handlePainClick('cut')}
                        data-selected={selectedPain === 'Thermometer' ? 'true' : 'false'}>
                    <img src={ThermometerImagePath} style={{width: "100%", height: "100%"}} alt="Thermometer"/>
                    ?יש לה חום
                </Button>
                <Button className="piece" onClick={() => handlePainClick('fiver')}
                        data-selected={selectedPain === 'Plaster' ? 'true' : 'false'}>
                    <img src={PlasterImagePath} style={{width: "100%", height: "100%"}} alt="Plaster"/>
                    ?יש לה חתך
                </Button>
            </div>
            <Button id="ContinueButton" disabled={selectedPain === ""} onClick={handleContinueClick}>
                המשך
            </Button>
        </div>
    );
}

export default ChoosePain;

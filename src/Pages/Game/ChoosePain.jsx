import * as React from 'react';
import './ChoosePain.css';
import Typography from "@mui/material/Typography";
import ThermometerImagePath from "../../../Public/HomePage/Thermometer.png";
import PlasterImagePath from "../../../Public/HomePage/Plaster.png";
import {useState} from "react";
import CustomToolbar from "../../Components/CustomToolbar.jsx";
import {Button} from "@mui/material";
import {useNavigate} from "react-router";


const ChoosePain = () => {
    const [selectedPain, setSelectedPain] = useState("");
    const navigate = useNavigate();

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

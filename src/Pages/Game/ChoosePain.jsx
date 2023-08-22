import * as React from 'react';
import './ChoosePain.css';
import Typography from "@mui/material/Typography";
import ThermometerImagePath from "../../../Public/HomePage/Thermometer.png";
import PlasterImagePath from "../../../Public/HomePage/Plaster.png";
import AbdominalPainImagePath from "../../../Public/HomePage/AbdominalPain.png";
import InjuryImagePath from "../../../Public/HomePage/Injury.png";
import {useState} from "react";
import CustomToolbar from '../../Components/CustomToolbar.jsx';
import {Button} from "@mui/material";
import {useNavigate} from "react-router";
import {useLocation} from "react-router-dom";


const ChoosePain = ({playClickSound}) => {
    const [selectedPain, setSelectedPain] = useState("");
    const navigate = useNavigate();
    const location = useLocation();
    const { animal } = location.state || {};

    const handlePainClick = (pain) => {
        setSelectedPain(pain);
    }

    const handleContinueClick = () => {
        if(selectedPain) {
            playClickSound();
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
                    <Button className="piece fever" onClick={() => handlePainClick('fever')}
                            data-selected={selectedPain === 'fever' ? 'true' : selectedPain === "" ? 'default' : 'false'}>
                        <img src={ThermometerImagePath} style={{width: "100%", height: "100%"}} alt="Thermometer"/>
                        ?יש לה חום
                    </Button>
                    <Button className="piece cut" onClick={() => handlePainClick('cut')}
                            data-selected={selectedPain === 'cut' ? 'true' : selectedPain === "" ? 'default' : 'false'}>
                        <img src={PlasterImagePath} style={{width: "100%", height: "100%"}} alt="Plaster"/>
                        ?יש לה חתך
                    </Button>
                    <Button className="piece abdominalPain" onClick={() => handlePainClick('abdominalPain')}
                            data-selected={selectedPain === 'abdominalPain' ? 'true' : selectedPain === "" ? 'default' : 'false'}>
                        <img src={AbdominalPainImagePath} style={{width: "100%", height: "100%"}} alt="AbdominalPain"/>
                        ?יש לה כאב בטן
                    </Button>
                    <Button className="piece injury" onClick={() => handlePainClick('injury')}
                            data-selected={selectedPain === 'injury' ? 'true' : selectedPain === "" ? 'default' : 'false'}>
                        <img src={InjuryImagePath} style={{width: "100%", height: "100%"}} alt="Injury"/>
                        ?יש לה חבלה ביד או רגל
                    </Button>
                </div>
                <Button id="ContinueButton" disabled={selectedPain === null} onClick={handleContinueClick}>
                    המשך
                </Button>
            </div>
    );
}

export default ChoosePain;
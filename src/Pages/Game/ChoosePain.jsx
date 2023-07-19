import './ChoosePain.css'
import * as React from 'react';
import Stack from '@mui/material/Stack';
import Typography from "@mui/material/Typography";
import ThermometerImagePath from "../../../Public/HomePage/Thermometer.png";
import PlasterImagePath from "../../../Public/HomePage/Plaster.png";
import {useState} from "react";
import CustomToolbar from '../../Components/CustomToolbar.jsx';

const ChoosePain = () => {
    const [selectedAnimal, setSelectedPain] = useState("");

    const handlePainClick = (pain) => {
        setSelectedPain(pain);
    }

    return (
        <div className="container">
            <div className="toolbar-container">
                <CustomToolbar toolbarTitle=""/>
            </div>
            <Stack spacing={2} sx={{ flexGrow: 1 }}>
                <Typography id = "Title" variant="h2" gutterBottom style={{ direction: 'rtl' }}>
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

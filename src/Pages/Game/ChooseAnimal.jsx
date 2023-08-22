import './ChooseAnimal.css'
import {useState} from 'react'
// import ButtonClickSound from '../../../Public/Sounds/click.mp3';
import Typography from "@mui/material/Typography";
import vetLionImagePath from "../../../Public/HomePage/VetLion.png";
import vetPandaImagePath from "../../../Public/HomePage/VetPanda.png";
import vetMonkeyImagePath from "../../../Public/HomePage/VetMonkey.png";
import vetDogImagePath from "../../../Public/HomePage/VetDog.png";
import {useNavigate} from "react-router";
import {Button} from "@mui/material";
import CustomToolbar from '../../Components/CustomToolbar.jsx';
import * as React from "react";

const ChooseAnimal = ({playClickSound}) => {
    const [selectedAnimal, setSelectedAnimal] = useState("");
    const navigate = useNavigate();

    const handleAnimalClick = (animal) => {
        setSelectedAnimal(animal);
    }

    const handleContinueClick = () => {
        if(selectedAnimal) {
            playClickSound();
            navigate('/choose-pain', { state: { animal: selectedAnimal } });
        }
    }

    return(
        <div className="container">
            <div className="toolbar-container">
                <CustomToolbar toolbarTitle=""/>
            </div>
            <Typography id = "Title" variant="h2" gutterBottom style={{ direction: 'rtl' }}>
                איזה חיה תרצה להיות?
            </Typography>
            <div className='rectangle'>
                <Button className="piece dog" onClick={() => handleAnimalClick('dog')} data-selected={selectedAnimal === 'dog' ? 'true' : selectedAnimal === "" ? 'default' : 'false'}>
                    <img src={vetDogImagePath} style={{width: "100%", height: "100%"}} alt="Dog" />
                </Button>
                <Button className="piece lion" onClick={() => handleAnimalClick('lion')} data-selected={selectedAnimal === 'lion' ? 'true' : selectedAnimal === "" ? 'default' : 'false'}>
                    <img src={vetLionImagePath} style={{width: "100%", height: "100%"}} alt="Lion" />
                </Button>
                <Button className="piece monkey" onClick={() => handleAnimalClick('monkey')} data-selected={selectedAnimal === 'monkey' ? 'true' : selectedAnimal === "" ? 'default' : 'false'}>
                    <img src={vetMonkeyImagePath} style={{width: "100%", height: "100%"}} alt="Monkey" />
                </Button>
                <Button className="piece panda" onClick={() => handleAnimalClick('panda')} data-selected={selectedAnimal === 'panda' ? 'true' : selectedAnimal === "" ? 'default' : 'false'}>
                    <img src={vetPandaImagePath} style={{width: "100%", height: "100%"}} alt="Panda" />
                </Button>
            </div>
            <Button id="ContinueButton" disabled={selectedAnimal === ""} onClick={handleContinueClick}>
                המשך
            </Button>
        </div>
    )
}


export default ChooseAnimal
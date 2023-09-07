import './ChooseAnimal.css'
import {useContext, useState} from 'react'
import Typography from "@mui/material/Typography";
import vetLionImagePath from "../../../Public/HomePage/VetLion.png";
import vetPandaImagePath from "../../../Public/HomePage/VetPanda.png";
import vetMonkeyImagePath from "../../../Public/HomePage/VetMonkey.png";
import vetDogImagePath from "../../../Public/HomePage/VetDog.png";
import noticePopUpImagePath from "../../../Public/GamePage/PopUp/notice.png"
import {useNavigate} from "react-router";
import {Button} from "@mui/material";
import CustomToolbar from '../../Components/CustomToolbar.jsx';
import * as React from "react";
import {SoundContext} from "../../Sound/SoundContext.jsx";
import PopUp from "../../Components/PopUp.jsx";

const ChooseAnimal = React.memo(() => {
    const { playClickSound } = useContext(SoundContext);
    const [selectedAnimal, setSelectedAnimal] = useState("");
    const navigate = useNavigate();
    const [errorPopupOpen, setErrorPopupOpen] = useState(false);

    const handleAnimalClick = (animal) => {
        setSelectedAnimal(animal);
    }

    const handleContinueClick = () => {
        if(selectedAnimal) {
            playClickSound();
            navigate('/choose-pain', { state: { animal: selectedAnimal } });
        }
        else {
            setErrorPopupOpen(true);
        }
    }

    return(
        <div className="choose-animal-container">
            <div className="toolbar-container">
                <CustomToolbar toolbarTitle=""/>
            </div>
            <Typography id = "ChooseAnimalTitle" variant="h2" gutterBottom style={{ direction: 'rtl' }}>
                לאיזה חיה
                תרצה לעזור?
            </Typography>
            <div className='animal-rectangle'>
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
            <Button id="ContinueAnimalButton" onClick={handleContinueClick}>
                המשך
            </Button>
            <PopUp
                isOpen={errorPopupOpen}
                closePopup={() => setErrorPopupOpen(false)}
                content="בבקשה לחצו על חיה ולאחר מכן על המשך."
                image={noticePopUpImagePath}
            />
        </div>
    )
})


export default ChooseAnimal
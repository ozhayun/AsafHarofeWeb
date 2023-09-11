import './ChooseAnimal.css'
import {useContext, useRef, useState} from 'react'
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
import IconButton from "@mui/material/IconButton";
import RecordVoiceOverIcon from "@mui/icons-material/RecordVoiceOver.js";
import VoiceOverOffIcon from "@mui/icons-material/VoiceOverOff.js";
import ChooseAnimalAudio from "../../../Public/ChooseAnimalPage/ChooseAnimal.mp3"
import ChooseAnimalErrorAudio from "../../../Public/ChooseAnimalPage/ChooseAnimalError.mp3"


const ChooseAnimal = React.memo(() => {
    const { playClickSound, isSpeaker, toggleIsSpeaker } = useContext(SoundContext);
    const [selectedAnimal, setSelectedAnimal] = useState("");
    const navigate = useNavigate();
    const [errorPopupOpen, setErrorPopupOpen] = useState(false);
    const audioRef = useRef(null);

    const handleAnimalClick = (animal) => {
        setSelectedAnimal(animal);
    }

    const handleContinueClick = () => {
        if(selectedAnimal) {
            if(isSpeaker) {
                toggleIsSpeaker();
            }
            playClickSound();
            navigate('/choose-pain', { state: { animal: selectedAnimal } });
        }
        else {
            setErrorPopupOpen(true);
        }
    }

    const handleClickOnChooseAnimalSpeaker = () =>{
        const audioElement = audioRef.current;
        if (isSpeaker) {
            audioElement.pause();
        } else {
            audioElement.currentTime = 0;
            audioElement.playbackRate = 1.25;
            audioElement.play();
        }
        toggleIsSpeaker();
    }

    return(
        <div className="choose-animal-container">
            <div className="toolbar-container">
                <CustomToolbar toolbarTitle=""/>
            </div>
            <Typography id = "ChooseAnimalTitle" variant="h2" gutterBottom style={{ direction: 'rtl' }}>
                לאיזו חיה
                תרצה לעזור?
            </Typography>
            <div className="speaker-button-chooseAnimal">
                <IconButton id="speaker" onClick={handleClickOnChooseAnimalSpeaker}>
                    {isSpeaker ? <RecordVoiceOverIcon fontSize="large"/> : <VoiceOverOffIcon fontSize="large"/>}
                </IconButton>
                <audio ref={audioRef} src={ChooseAnimalAudio}></audio>
            </div>
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
                content="בבקשה בחר חיה שלה תרצה לעזור ולאחר מכן לחץ על המשך."
                image={noticePopUpImagePath}
                audio={ChooseAnimalErrorAudio}
            />
        </div>
    )
})


export default ChooseAnimal
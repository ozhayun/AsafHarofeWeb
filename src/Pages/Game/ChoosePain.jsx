import * as React from 'react';
import './ChoosePain.css';
import Typography from "@mui/material/Typography";
import ThermometerImagePath from "../../../Public/HomePage/Thermometer.png";
import PlasterImagePath from "../../../Public/HomePage/Plaster.png";
import AbdominalPainImagePath from "../../../Public/HomePage/AbdominalPain.png";
import InjuryImagePath from "../../../Public/HomePage/Injury.png";
import {useContext, useEffect, useRef, useState} from "react";
import CustomToolbar from '../../Components/CustomToolbar.jsx';
import {Button} from "@mui/material";
import {useNavigate} from "react-router";
import {useLocation} from "react-router-dom";
import {SoundContext} from "../../Sound/SoundContext.jsx";
import PopUp from "../../Components/PopUp.jsx";
import noticePopUpImagePath from "../../../Public/GamePage/PopUp/notice.png";
import IconButton from "@mui/material/IconButton";
import RecordVoiceOverIcon from "@mui/icons-material/RecordVoiceOver";
import VoiceOverOffIcon from "@mui/icons-material/VoiceOverOff";


const ChoosePain = React.memo(() => {
    const { playClickSound, isSpeaker, toggleIsSpeaker } = useContext(SoundContext);
    const [selectedPain, setSelectedPain] = useState("");
    const [animalAudioSrc, setAnimalAudioSrc] = useState(null);
    const [animalPainErrorAudioSrc, setAnimalPainErrorAudioSrc] = useState(null);
    const navigate = useNavigate();
    const location = useLocation();
    const { animal } = location.state || {};
    const [errorPopupOpen, setErrorPopupOpen] = useState(false);
    const audioRef = useRef(null);


    useEffect(() => {
        async function loadAnimalAudio() {
            let animalPainAudio, animalPainErrorAudio;
            switch (animal) {
                case 'dog':
                    animalPainAudio = await import("../../../Public/ChoosePainPage/dog.mp3");
                    animalPainErrorAudio = await import("../../../Public/ChoosePainPage/dog-error.mp3")
                    break;
                case 'lion':
                    animalPainAudio = await import("../../../Public/ChoosePainPage/lion.mp3");
                    animalPainErrorAudio = await import("../../../Public/ChoosePainPage/lion-error.mp3")
                    break;
                case 'monkey':
                    animalPainAudio = await import("../../../Public/ChoosePainPage/monkey.mp3");
                    animalPainErrorAudio = await import("../../../Public/ChoosePainPage/monkey-error.mp3")
                    break;
                case 'panda':
                    animalPainAudio = await import("../../../Public/ChoosePainPage/panda.mp3");
                    animalPainErrorAudio = await import("../../../Public/ChoosePainPage/panda-error.mp3")
                    break;
                default:
                    animalHebrew = null;
            }
            if (animalPainAudio && animalPainAudio.default) {
                setAnimalAudioSrc(animalPainAudio.default);
            }
            if (animalPainErrorAudio && animalPainErrorAudio.default) {
                setAnimalPainErrorAudioSrc(animalPainErrorAudio.default);
            }
        }

        if (animal) {
            loadAnimalAudio();
        }
    }, [animal]);


    let animalHebrew;
    switch (animal) {
        case 'dog':
            animalHebrew = 'כלב';
            break;
        case 'lion':
            animalHebrew = 'אריה';
            break;
        case 'monkey':
            animalHebrew = 'קוף';
            break;
        case 'panda':
            animalHebrew = 'דוב פנדה';
            break;
        default:
            animalHebrew = null;
    }

    const handlePainClick = (pain) => {
        setSelectedPain(pain);
    }

    const handleContinueClick = () => {
        if(selectedPain) {
            if(isSpeaker) {
                toggleIsSpeaker();
            }
            playClickSound();
            navigate('/game', { state: { pain: selectedPain, animal: animal, animalHebrew: animalHebrew } });
        }
        else {
            setErrorPopupOpen(true);
        }
    }

    const handleClickOnChooseAnimalPainSpeaker = () =>{
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

    return (
        <div className="choose-pain-container">
            <div className="toolbar-container">
                <CustomToolbar toolbarTitle=""/>
            </div>
            <Typography id = "ChoosePainTitle" variant="h2" gutterBottom style={{ direction: 'rtl' }}>
                מה כואב
                <br />
                ל{animalHebrew}?
            </Typography>
            <div className="speaker-button">
                <IconButton id="speaker" onClick={handleClickOnChooseAnimalPainSpeaker}>
                    {isSpeaker ? <RecordVoiceOverIcon fontSize="large"/> : <VoiceOverOffIcon fontSize="large"/>}
                </IconButton>
                <audio ref={audioRef} src={animalAudioSrc}></audio>
            </div>
            <div className='rectanglePain'>
                <Button className="piece fever" onClick={() => handlePainClick('fever')}
                        data-selected={selectedPain === 'fever' ? 'true' : selectedPain === "" ? 'default' : 'false'}>
                    <img src={ThermometerImagePath} style={{width: "100%", height: "100%"}} alt="Thermometer"/>
                    יש לו חום
                </Button>
                <Button className="piece cut" onClick={() => handlePainClick('cut')}
                        data-selected={selectedPain === 'cut' ? 'true' : selectedPain === "" ? 'default' : 'false'}>
                    <img src={PlasterImagePath} style={{width: "100%", height: "100%"}} alt="Plaster"/>
                    יש לו חתך
                </Button>
                <Button className="piece abdominalPain" onClick={() => handlePainClick('abdominalPain')}
                        data-selected={selectedPain === 'abdominalPain' ? 'true' : selectedPain === "" ? 'default' : 'false'}>
                    <img src={AbdominalPainImagePath} style={{width: "100%", height: "100%"}} alt="AbdominalPain"/>
                    יש לו כאב בטן
                </Button>
                <Button className="piece injury" onClick={() => handlePainClick('injury')}
                        data-selected={selectedPain === 'injury' ? 'true' : selectedPain === "" ? 'default' : 'false'}>
                    <img src={InjuryImagePath} style={{width: "100%", height: "100%"}} alt="Injury"/>
                    יש לו חבלה ביד או ברגל
                </Button>
            </div>
            <Button id="ContinuePainButton" onClick={handleContinueClick}>
                המשך
            </Button>
            <PopUp
                isOpen={errorPopupOpen}
                closePopup={() => setErrorPopupOpen(false)}
                content={`בבקשה בחר מה כואב ל${animalHebrew} ולאחר מכן לחץ על המשך.`}
                image={noticePopUpImagePath}
                audio={animalPainErrorAudioSrc}
            />
        </div>
    );
})

export default ChoosePain;
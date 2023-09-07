import * as React from 'react';
import './ChoosePain.css';
import Typography from "@mui/material/Typography";
import ThermometerImagePath from "../../../Public/HomePage/Thermometer.png";
import PlasterImagePath from "../../../Public/HomePage/Plaster.png";
import AbdominalPainImagePath from "../../../Public/HomePage/AbdominalPain.png";
import InjuryImagePath from "../../../Public/HomePage/Injury.png";
import {useContext, useState} from "react";
import CustomToolbar from '../../Components/CustomToolbar.jsx';
import {Button} from "@mui/material";
import {useNavigate} from "react-router";
import {useLocation} from "react-router-dom";
import {SoundContext} from "../../Sound/SoundContext.jsx";
import {BackgroundMusicContext} from "../../Sound/BackgroundMusicContext.jsx";
import PopUp from "../../Components/PopUp.jsx";
import noticePopUpImagePath from "../../../Public/GamePage/PopUp/notice.png";
import vetDogImagePath from "../../../Public/HomePage/VetDog.png";
import vetDogPlayerImagePath from "../../../Public/GamePage/dogPlayer.png";
import vetLionImagePath from "../../../Public/HomePage/VetLion.png";
import vetLionPlayerImagePath from "../../../Public/GamePage/lionPlayer.png";
import vetMonkeyImagePath from "../../../Public/HomePage/VetMonkey.png";
import vetMonkeyPlayerImagePath from "../../../Public/GamePage/monkeyPlayer.png";
import vetPandaImagePath from "../../../Public/HomePage/VetPanda.png";
import vetPandaPlayerImagePath from "../../../Public/GamePage/pandaPlayer.png";


const ChoosePain = React.memo(() => {
    const { playClickSound } = useContext(SoundContext);
    const [selectedPain, setSelectedPain] = useState("");
    const navigate = useNavigate();
    const location = useLocation();
    const { animal } = location.state || {};
    const [errorPopupOpen, setErrorPopupOpen] = useState(false);

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
            playClickSound();
            navigate('/game', { state: { pain: selectedPain, animal: animal, animalHebrew: animalHebrew } });
        }
        else {
            setErrorPopupOpen(true);
        }
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
                content="בבקשה לחצו על כאב ולאחר מכן על המשך."
                image={noticePopUpImagePath}
            />
        </div>
    );
})

export default ChoosePain;
import './PopUp.css'
import CloseIcon from '@mui/icons-material/Close';
import RecordVoiceOverIcon from '@mui/icons-material/RecordVoiceOver';
import VoiceOverOffIcon from '@mui/icons-material/VoiceOverOff';
import React, {useEffect} from "react";
import winPopUpImagePath from "../../Public/GamePage/PopUp/win.png";
import {SoundContext} from "../Sound/SoundContext.jsx";
import IconButton from "@mui/material/IconButton";
import Victory from "../../Public/Sounds/PopUp/Victory.mp3";
const PopUp = ({ isOpen, isPlayerWin, content, audio, image, closePopup, restartGame, navigateHome }) => {
    const {isSpeaker, toggleIsSpeaker} = React.useContext(SoundContext);

    useEffect(() => {
        let audioElement;

        if (isOpen && isSpeaker) {
            audioElement = new Audio(audio);
            audioElement.playbackRate = 1.25;
            audioElement.play();
        }

        return () => {
            if (audioElement) {
                audioElement.pause();
            }
        };
    }, [isOpen, isSpeaker, audio]);

    if (!isOpen) return null;

    if (isPlayerWin) {
        image = winPopUpImagePath;
        content = (
            <div>
                <p>ברכות! ניצחת במשחק!</p>
                <button
                    className="button-restart"
                    onClick={() => restartGame()}
                >
                    משחק חדש
                </button>
                <button
                    className="button-home"
                    onClick={() => navigateHome()}
                >
                    מסך ראשי
                </button>
            </div>
        );

        audio= Victory;
    }

    return (
        <div className="popup-container">
            <div className="popup-content">
                <div className="popup-header">
                    {!isPlayerWin && (
                        <button className="close-button" onClick={closePopup}>
                            <CloseIcon className="close-icon" />
                        </button>
                    )}
                    <div className="speaker-button">
                        <IconButton id="speaker" onClick={toggleIsSpeaker}>
                            {isSpeaker ? <RecordVoiceOverIcon fontSize="large"/> : <VoiceOverOffIcon fontSize="large"/>}
                        </IconButton>
                    </div>
                </div>
                <div className={`popup-image-container`}>
                    <img src={image} alt={`popup-image`} className={`popup-image`} />
                </div>
                <div className="content">{content}</div>
            </div>
        </div>
    );
};

export default PopUp
import React, { useState } from 'react';
import ButtonClickSound from '../../Public/Sounds/ClickSound.mp3';
import { SoundContext } from './SoundContext'
import WinSoundMP3 from '../../Public/Sounds/WinSound.mp3';
import SlideSoundMP3 from '../../Public/Sounds/SlideSound.mp3';
import LadderSoundMP3 from '../../Public/Sounds/LadderSound.mp3';
import diceRollSound from '../../Public/Sounds/DiceRollingSound.mp3'

export const SoundProvider = ({ children }) => {
    const [isMuted, setIsMuted] = useState(false);
    const clickAudio = new Audio(ButtonClickSound);
    const winSound = new Audio(WinSoundMP3);
    const slideSound = new Audio(SlideSoundMP3);
    const ladderSound = new Audio(LadderSoundMP3);
    const diceRollAudio = new Audio(diceRollSound);

    const playWinSound = () => {
        if(!isMuted) winSound.play();
    }

    const playSlideSound = () => {
        if(!isMuted) slideSound.play();
    }

    const playLadderSound = () => {
        if(!isMuted) ladderSound.play();
    }
    const playClickSound = () => {
        if (!isMuted) clickAudio.play();
    };

    const playDiceRollSound = () => {
        if (!isMuted) diceRollAudio.play();
    }
    const toggleMute = () => {
        setIsMuted(prevState => !prevState);
    };



    return (
    <SoundContext.Provider value={{ playClickSound, playWinSound, playSlideSound, playLadderSound, playDiceRollSound, toggleMute, isMuted }}>
            {children}
        </SoundContext.Provider>
    );
}

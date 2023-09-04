import React, {useEffect, useRef, useState} from 'react';
import ButtonClickSound from '../../Public/Sounds/ClickSound.mp3';
import { SoundContext } from './SoundContext'
import WinSoundMP3 from '../../Public/Sounds/WinSound.mp3';
import SlideSoundMP3 from '../../Public/Sounds/SlideSound.mp3';
import LadderSoundMP3 from '../../Public/Sounds/LadderSound.mp3';
import DiceRollSoundMP3 from '../../Public/Sounds/DiceRollingSound.mp3'
import BackgroundMusicMP3 from '../../Public/Sounds/Island Dream - Chris Haugen.mp3'

export const SoundProvider = ({ children }) => {
    const [isMuted, setIsMuted] = useState(false);
    const [isBackgroundMusicPlaying, setIsBackgroundMusicPlaying] = useState(false);
    const clickAudio = new Audio(ButtonClickSound);
    const winSound = new Audio(WinSoundMP3);
    const slideSound = new Audio(SlideSoundMP3);
    const ladderSound = new Audio(LadderSoundMP3);
    const diceRollAudio = new Audio(DiceRollSoundMP3);
    const backgroundMusicAudioRef = useRef(new Audio(BackgroundMusicMP3)); // Use useRef

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

    const toggleBackgroundMusic = () => {
        setIsBackgroundMusicPlaying(prevState => !prevState);
        const backgroundMusicAudio = backgroundMusicAudioRef.current; // Get the current instance

        if (!isBackgroundMusicPlaying) {
            backgroundMusicAudio.pause();
        } else {
            backgroundMusicAudio.volume = 0.3;
            backgroundMusicAudio.play();
        }
    };

    const startBackgroundMusic = () => {
        backgroundMusicAudioRef.current.currentTime = 0; // Reset the audio to the beginning
        backgroundMusicAudioRef.current.play();
    };

    const playBackgroundMusic = () => {
        setIsBackgroundMusicPlaying(true);
    }

    const pauseBackgroundMusic = () => {
        setIsBackgroundMusicPlaying(false);
    }

    useEffect(() => {
        const backgroundMusicAudio = backgroundMusicAudioRef.current;

        if (isBackgroundMusicPlaying) {
            backgroundMusicAudio.volume = 0.3;
            backgroundMusicAudio.play();
        } else {
            backgroundMusicAudio.pause();
        }
    }, [isBackgroundMusicPlaying]);

    useEffect(() => {
        backgroundMusicAudioRef.current.addEventListener('ended', startBackgroundMusic);

        return () => {
            backgroundMusicAudioRef.current.removeEventListener('ended', startBackgroundMusic);
        };
    }, []);

    return (
        <SoundContext.Provider value={{ playClickSound,
            playWinSound,
            playSlideSound,
            playLadderSound,
            playDiceRollSound,
            toggleBackgroundMusic,
            isBackgroundMusicPlaying,
            playBackgroundMusic,
            pauseBackgroundMusic,
            toggleMute,
            isMuted }}>
            {children}
        </SoundContext.Provider>
    );
}

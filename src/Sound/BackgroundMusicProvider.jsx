import React, { useEffect, useRef, useState } from 'react';
import BackgroundMusicMP3 from '../../Public/Sounds/Island Dream - Chris Haugen.mp3';
import { BackgroundMusicContext } from './BackgroundMusicContext';

export const BackgroundMusicProviderComponent = ({ children }) => {
    const [isBackgroundMusicPlaying, setIsBackgroundMusicPlaying] = useState(false);
    const backgroundMusicAudioRef = useRef(new Audio(BackgroundMusicMP3));

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
        playBackgroundMusic();
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
            backgroundMusicAudio.volume = 0.02;
            backgroundMusicAudio.play();
        } else {
            backgroundMusicAudio.pause();
        }
    }, [isBackgroundMusicPlaying]);

    return (
        <BackgroundMusicContext.Provider value={{
            toggleBackgroundMusic,
            isBackgroundMusicPlaying,
            playBackgroundMusic,
            pauseBackgroundMusic,
            startBackgroundMusic}}>
            {children}
        </BackgroundMusicContext.Provider>
    );
};

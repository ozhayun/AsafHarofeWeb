import React, { useEffect, useRef, useState } from 'react';
import BackgroundMusicMP3 from '../../Public/Sounds/Island Dream - Chris Haugen.mp3';
import { BackgroundMusicContext } from './BackgroundMusicContext';

export const BackgroundMusicProviderComponent = ({ children }) => {
    const [isBackgroundMusicPlaying, setIsBackgroundMusicPlaying] = useState(false);
    const backgroundMusicAudioRef = useRef(new Audio(BackgroundMusicMP3));

    const toggleBackgroundMusic = () => {
        setIsBackgroundMusicPlaying((prevIsPlaying) => !prevIsPlaying);
    };

    const startBackgroundMusic = () => {
        const backgroundMusicAudio = backgroundMusicAudioRef.current;
        backgroundMusicAudio.currentTime = 0;
        playBackgroundMusic();
    };

    const playBackgroundMusic = () => {
        const backgroundMusicAudio = backgroundMusicAudioRef.current;
        backgroundMusicAudio.volume = 0.04;
        backgroundMusicAudio.play().then(() => {
            setIsBackgroundMusicPlaying(true);
        });
    };

    const pauseBackgroundMusic = () => {
        const backgroundMusicAudio = backgroundMusicAudioRef.current;
        backgroundMusicAudio.pause();
        setIsBackgroundMusicPlaying(false);
    };

    useEffect(() => {
        const backgroundMusicAudio = backgroundMusicAudioRef.current;

        // Add an event listener to restart the audio when it ends
        backgroundMusicAudio.addEventListener('ended', startBackgroundMusic);

        if (isBackgroundMusicPlaying) {
            playBackgroundMusic();
        } else {
            pauseBackgroundMusic();
        }

        // Cleanup the event listener when the component unmounts
        return () => {
            backgroundMusicAudio.removeEventListener('ended', startBackgroundMusic);
        };
    }, [isBackgroundMusicPlaying]);

    return (
        <BackgroundMusicContext.Provider value={{
            toggleBackgroundMusic,
            isBackgroundMusicPlaying,
            playBackgroundMusic,
            pauseBackgroundMusic,
            startBackgroundMusic,
        }}>
            {children}
        </BackgroundMusicContext.Provider>
    );
};

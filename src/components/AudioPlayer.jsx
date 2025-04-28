

import React, { useState, useEffect } from 'react';
import audioFile from '../assets/audio/MusicBirthday.mp3';
import { FaPlay, FaPause, FaVolumeUp } from 'react-icons/fa';

const AudioPlayer = ({ shouldPlay }) => {
    const [isPlaying, setIsPlaying] = useState(false);
    const [volume, setVolume] = useState(0.7);

    useEffect(() => {
        const audio = document.getElementById('birthday-audio');
        if (!audio) return;
        
        if (shouldPlay) {
            audio.play();
            setIsPlaying(true);
        }
    }, [shouldPlay]);

    const togglePlay = () => {
        const audio = document.getElementById('birthday-audio');
        if (isPlaying) {
            audio.pause();
        } else {
            audio.play();
        }
        setIsPlaying(!isPlaying);
    };

    const handleVolumeChange = (e) => {
        const newVolume = e.target.value;
        setVolume(newVolume);
        document.getElementById('birthday-audio').volume = newVolume;
    };

    return (
        <div className="audio-player-container">
            <audio 
                id="birthday-audio"
                src={audioFile} 
                loop
            />
            
            <div className="audio-controls">
                <button 
                    onClick={togglePlay} 
                    className="audio-button"
                    aria-label={isPlaying ? 'Pausar música' : 'Reproducir música'}
                >
                    {isPlaying ? <FaPause /> : <FaPlay />}
                </button>
                
                <div className="volume-control">
                    <FaVolumeUp className="volume-icon" />
                    <input 
                        type="range" 
                        min="0" 
                        max="1" 
                        step="0.01" 
                        value={volume} 
                        onChange={handleVolumeChange}
                        className="volume-slider"
                    />
                </div>
            </div>
        </div>
    );
};

export default AudioPlayer;

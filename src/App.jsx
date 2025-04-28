
import React, { useState } from 'react';
import BirthdayCard from './components/BirthdayCard';
import ConfettiEffect from './components/ConfettiEffect';
import Footer from './components/Footer';
import AudioPlayer from './components/AudioPlayer';
import './index.css';

const App = () => {
  const [shouldPlayMusic, setShouldPlayMusic] = useState(false);

  const handleShowMessage = () => {
    setShouldPlayMusic(true);
  };

  return (
    <div className="app">
      <ConfettiEffect />
      <AudioPlayer shouldPlay={shouldPlayMusic} />
      <BirthdayCard onShowMessage={handleShowMessage} />
      <Footer />
    </div>
  );
};

export default App;

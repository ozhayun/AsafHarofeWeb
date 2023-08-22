import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './Pages/HomePage/HomePage';
import MedicalDocumentsPage from './Pages/MedicalDocumentsPage/MedicalDocumentsPage';
import ChooseAnimal from './Pages/Game/ChooseAnimal'
import ChoosePain from './Pages/Game/ChoosePain';
import GamePage from './Pages/Game/GamePage';
import ButtonClickSound from '/Public/Sounds/ClickSound.mp3';


function App() {
    const clickAudio = new Audio(ButtonClickSound);

    function playClickSound() {
        const audio = new Audio(ButtonClickSound);
        audio.play();
    }

    return (
        <Router>
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/medical-documents" element={<MedicalDocumentsPage />} />
                <Route path="/game" element={<GamePage />} />
                <Route
                    path="/choose-animal"
                    element={
                    <ChooseAnimal
                        playClickSound={playClickSound}
                    />
                    }
                />
                <Route
                    path="/choose-pain"
                    element={
                    <ChoosePain
                        playClickSound={playClickSound}
                     />
                    }
                />
            </Routes>
        </Router>
    );
}

export default App;

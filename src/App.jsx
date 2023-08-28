import './App.css';
import {SoundProvider} from "./Sound/SoundProvider.jsx";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './Pages/HomePage/HomePage';
import MedicalDocumentsPage from './Pages/MedicalDocumentsPage/MedicalDocumentsPage';
import ChooseAnimal from './Pages/Game/ChooseAnimal'
import ChoosePain from './Pages/Game/ChoosePain';
import GamePage from './Pages/Game/GamePage';


function App() {
    return (
        <SoundProvider>
            <Router>
                <Routes>
                    <Route path="/" element={<HomePage />} />
                    <Route path="/medical-documents" element={<MedicalDocumentsPage />} />
                    <Route path="/game" element={<GamePage />} />
                    <Route path="/choose-animal" element={<ChooseAnimal/>}/>
                    <Route path="/choose-pain" element={<ChoosePain/>}/>
                </Routes>
            </Router>
        </SoundProvider>
    );
}

export default App;
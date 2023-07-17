import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './Pages/HomePage/HomePage';
import MedicalDocumentsPage from './Pages/MedicalDocumentsPage/MedicalDocumentsPage';
import GamePage from './Pages/Game/GamePage';

function App() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/medical-documents" element={<MedicalDocumentsPage />} />
                <Route path="/game" element={<GamePage />} />
            </Routes>
        </Router>
    );
}

export default App;

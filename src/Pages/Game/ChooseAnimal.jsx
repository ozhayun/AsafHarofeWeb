import {useState} from 'react'
import './ChooseAnimal.css'
import Typography from "@mui/material/Typography";
import vetLionImagePath from "../../../Public/HomePage/VetLion.png";
import vetPandaImagePath from "../../../Public/HomePage/VetPanda.png";
import vetMonkeyImagePath from "../../../Public/HomePage/VetMonkey.png";
import vetDogImagePath from "../../../Public/HomePage/VetDog.png";
import {useNavigate} from "react-router";

const ChooseAnimal = () => {
    const [selectedAnimal, setSelectedAnimal] = useState("");
    const navigate = useNavigate();

    const handleAnimalClick = (animal) => {
        setSelectedAnimal(animal);
    }

    const handleContinueClick = () => {
        if(selectedAnimal) {
            navigate('/choose-pain');
        }
    }

    return(
        <div className="container">
            <Typography id = "Title" variant="h2" gutterBottom>
                איזה חיה תרצה להיות?
            </Typography>
            <div className='rectangle'>
                <button className="piece dog" onClick={() => handleAnimalClick('dog')} data-selected={selectedAnimal === 'dog' ? 'true' : 'false'}>
                    <img src={vetDogImagePath} style={{width: "100%", height: "100%"}} alt="Dog" />
                </button>
                <button className="piece lion" onClick={() => handleAnimalClick('lion')} data-selected={selectedAnimal === 'lion' ? 'true' : 'false'}>
                    <img src={vetLionImagePath} style={{width: "100%", height: "100%"}} alt="Lion" />
                </button>
                <button className="piece monkey" onClick={() => handleAnimalClick('monkey')} data-selected={selectedAnimal === 'monkey' ? 'true' : 'false'}>
                    <img src={vetMonkeyImagePath} style={{width: "100%", height: "100%"}} alt="Monkey" />
                </button>
                <button className="piece panda" onClick={() => handleAnimalClick('panda')} data-selected={selectedAnimal === 'panda' ? 'true' : 'false'}>
                    <img src={vetPandaImagePath} style={{width: "100%", height: "100%"}} alt="Panda" />
                </button>

            </div>
            <button id="ContinueButton" disabled={selectedAnimal === null} onClick={handleContinueClick}>
                המשך
            </button>
        </div>
    )
}


export default ChooseAnimal
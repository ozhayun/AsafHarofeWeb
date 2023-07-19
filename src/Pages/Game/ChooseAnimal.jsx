import {useState} from 'react'
import './ChooseAnimal.css'
import Typography from "@mui/material/Typography";
import vetLionImagePath from "../../../Public/HomePage/VetLion.png";
import vetPandaImagePath from "../../../Public/HomePage/VetPanda.png";
import vetMonkeyImagePath from "../../../Public/HomePage/VetMonkey.png";
import vetDogImagePath from "../../../Public/HomePage/VetDog.png";
import {useNavigate} from "react-router";
import {Button} from "@mui/material";

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
            <Typography id = "Title" variant="h2" gutterBottom style={{ direction: 'rtl' }}>
                איזה חיה תרצה להיות?
            </Typography>
            <div className='rectangle'>
                <Button className="piece dog" onClick={() => handleAnimalClick('dog')} data-selected={selectedAnimal === 'dog' ? 'true' : selectedAnimal === "" ? 'default' : 'false'}>
                    <img src={vetDogImagePath} style={{width: "100%", height: "100%"}} alt="Dog" />
                </Button>
                <Button className="piece lion" onClick={() => handleAnimalClick('lion')} data-selected={selectedAnimal === 'lion' ? 'true' : selectedAnimal === "" ? 'default' : 'false'}>
                    <img src={vetLionImagePath} style={{width: "100%", height: "100%"}} alt="Lion" />
                </Button>
                <Button className="piece monkey" onClick={() => handleAnimalClick('monkey')} data-selected={selectedAnimal === 'monkey' ? 'true' : selectedAnimal === "" ? 'default' : 'false'}>
                    <img src={vetMonkeyImagePath} style={{width: "100%", height: "100%"}} alt="Monkey" />
                </Button>
                <Button className="piece panda" onClick={() => handleAnimalClick('panda')} data-selected={selectedAnimal === 'panda' ? 'true' : selectedAnimal === "" ? 'default' : 'false'}>
                    <img src={vetPandaImagePath} style={{width: "100%", height: "100%"}} alt="Panda" />
                </Button>
            </div>
            <Button id="ContinueButton" disabled={selectedAnimal === null} onClick={handleContinueClick}>
                המשך
            </Button>
        </div>
    )
}


export default ChooseAnimal
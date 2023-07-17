import './HomePage.css'
import shamirLogoPath from "../Public/HomePage/ShamirLogo.png";
import vetLionImagePath from "../Public/HomePage/VetLion.png";
import vetPandaImagePath from "../Public/HomePage/VetPanda.png";
import vetMonkeyImagePath from "../Public/HomePage/VetMonkey.png";
import vetDogImagePath from "../Public/HomePage/VetDog.png";

const HomePage = () => {
    return (
        <div id="HomePage">
            <img src={shamirLogoPath} id="ShamirLogo" alt="Shamir"/>
            <div className="AnimalsBackground">
                <img src={vetLionImagePath} id="LionBackground" alt="Lion"/>
                <img src={vetPandaImagePath} id="PandaBackground" alt="Panda"/>
                <img src={vetMonkeyImagePath} id="MonkeyBackground" alt="Monkey"/>
                <img src={vetDogImagePath} id="DogBackground" alt="Dog"/>
            </div>
            <button id="MedicalDocumentsButton">מסמכים רפואים</button>
            <button id="StartGameButton">התחל משחק</button>
        </div>
    )
}


export default HomePage
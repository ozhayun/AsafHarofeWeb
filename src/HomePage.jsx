import './HomePage.css'
import shamirLogoPath from "../Public/HomePage/ShamirLogo.png";
import vetLionImagePath from "../Public/HomePage/VetLion.png";
import vetPandaImagePath from "../Public/HomePage/VetPanda.png";
import vetMonkeyImagePath from "../Public/HomePage/VetMonkey.png";
import vetDogImagePath from "../Public/HomePage/VetDog.png";
import youtubeImagePath from "../Public/HomePage/YouTube.png";
import facebookImagePath from "../Public/HomePage/Facebook.png";
import instagramImagePath from "../Public/HomePage/Instagram.png";

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
            <div id='linksDiv'>
                <a href="https://www.youtube.com/@Aharofeh" target="_blank">
                    <img src={youtubeImagePath} id="YoutubeIcon" alt='Youtube'/>
                </a>
                <a href="https://www.facebook.com/Shamir.medical/about" target="_blank">
                    <img src={facebookImagePath} id="FacebookIcon" alt='Facebook'/>
                </a>
                <a href="https://instagram.com/shamir.medical.center?igshid=MTIzZWMxMTBkOA==" target="_blank">
                    <img src={instagramImagePath} id="InstagramIcon" alt='Instagram'/>
                </a>
            </div>
        </div>
    )
}


export default HomePage
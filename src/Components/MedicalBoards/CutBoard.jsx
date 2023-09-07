import "./CutBoard.css"
import slideImagePath from "../../../Public/GamePage/water-slide.png";
import ladderImagePath from "../../../Public/GamePage/ladder.png";
import * as React from "react";
import Board from "../Board.jsx";
import startPopUpImagePath from "../../../Public/GamePage/PopUp/start.png";
import nursesPopUpImagePath from "../../../Public/GamePage/PopUp/nursesStation.png";
import waitingPopUpImagePath from "../../../Public/GamePage/PopUp/Waiting.png";
import medicalTestsPopUpImagePath from "../../../Public/GamePage/PopUp/medicalTests.png";
import homePopUpImagePath from "../../../Public/GamePage/PopUp/home.png";
import gelSoapPopUpImagePath from "../../../Public/GamePage/PopUp/gelSoap.png";
import injectionPopUpImagePath from "../../../Public/GamePage/PopUp/injection.png";

const CutBoard = ({animal, animalHebrew, pain, playerPosition, playerImage, onLaddersChange, onSlidesChange, setPopUpCells, setPopUpMessages, setPopUpImages, importAudio, setPopUpsAudio, resetKey }) => {
    const specifics = {
        ladders: {
            4: 23,
            28: 46,
            51: 92,
            22: 41,
            24 : 38,
            36 : 86,
            79 : 99,
            12 : 32},
        slides: {
            21: 2,
            53 : 31,
            77: 42,
            26 : 9,
            96: 78,
            93 : 67,
            61 : 59,
            95: 87 },
        popUpCells: [3,11,18,25,33,40,49,57,65,74,81,88,94],
        popUpMessages: [
            "ברוכים הבאים למשחק סולמות ומגלשות! במהלך המשחק נלווה את ה" + animalHebrew +
            " בתהליך הטיפול הרפואי שהוא הולך לעבור במיון. חשוב לנו לומר שהצוות הרפואי שנמצא במיון עושה את המאמצים לעזור לנו להרגיש טוב יותר. ה" + animalHebrew +
            " לא נמצא לבד, אתם וההורים שלכם מלווים אותה בתהליך. אם הוא מפחד אפשר לשתף את הצוות הרפואי. מאחלים לכם משחק מהנה!",

            "בהתחלה האח או האחות יבדקו את ה " + animalHebrew + "," +
            ", אם יורד לו דם, אז קודם נעצור את הדימום ולאחר מכן הם יבדקו חום, דופק ולחץ דם.",

            "עכשיו אנחנו ממתינים בסבלנות לרופאים שיחליטו על הטיפול המתאים.",

            "הטיפולים האפשריים הם חבישה, הדבקה או תפירה. יכול להיות שיביאו ל" + animalHebrew +
            " תרופה כדי שלא יכאב לו. הרופאים עושים את כל המאמצים שהטיפול יהיה מהיר וללא כאבים. אם כואב לו תשתף אותם כדי שיוכלו להקל עליו.",

            "לאחר מכן, ה" + animalHebrew +
            " יעבור ניקוי וחיטוי של החתך, כדי שחיידקים רעים לא יכנסו לגוף שלו.",

            "במידה וה" + animalHebrew +
            " לא מחוסן לטטנוס או שחיסון הטטנוס שלו לא בתוקף, הוא יקבל זריקת טטנוס.",

            "לאחר התאוששות יכול להיות ש" + animalHebrew +
            " יעבור למחלקה ונשאר ביחד קצת בבית החולים או שנקבל מכתב ונחזור הביתה."
        ],
        popUpImages:[
            startPopUpImagePath,
            nursesPopUpImagePath,
            waitingPopUpImagePath,
            medicalTestsPopUpImagePath,
            gelSoapPopUpImagePath,
            injectionPopUpImagePath,
            homePopUpImagePath
        ]
    };

    const imagesCount = 8;

    return (
        <div className="CB-game-board-container">
            <Board playerPosition={playerPosition}
                   playerImage={playerImage}
                   onLaddersChange={onLaddersChange}
                   onSlidesChange={onSlidesChange}
                   setPopUpCells={setPopUpCells}
                   setPopUpMessages={setPopUpMessages}
                   setPopUpImages={setPopUpImages}
                   animal={animal}
                   animalHebrew={animalHebrew}
                   pain={pain}
                   importAudio={importAudio}
                   setPopUpsAudio={setPopUpsAudio}
                   resetKey={resetKey}
                   {...specifics}/>

            {/*Slides*/}
            {Array.from({ length: imagesCount }, (_, index) => (
                <div key={index} className={`CB-slide-image${index + 1}-container`}>
                    <img src={slideImagePath} alt={`Slide ${index + 1}`} className={`CB-slide-image${index + 1}`} />
                </div>
            ))}

            {/*Ladders*/}
            {Array.from({ length: imagesCount }, (_, index) => (
                <div key={index} className={`CB-ladder-image${index + 1}-container`}>
                    <img src={ladderImagePath} alt={`Ladder ${index + 1}`} className={`CB-ladder-image${index + 1}`} />
                </div>
            ))}
        </div>
    )
}


export default CutBoard
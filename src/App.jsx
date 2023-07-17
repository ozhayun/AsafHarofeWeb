import './App.css'

function App() {
  return (
    <div id="Body">
        <img src='./Public/HomePage/ShamirLogo.png' id="ShamirLogo" alt="Shamir"/>
        <div className="AnimalsBackground">
            <img src='./Public/HomePage/אריה.png' id="LionBackground" alt="Lion"/>
            <img src='./Public/HomePage/פנדוקטור.png' id="PandaBackground" alt="Panda"/>
            <img src='./Public/HomePage/קופרסור.png' id="MonkeyBackground" alt="Monkey"/>
            <img src='./Public/HomePage/כלבטרינר.png' id="DogBackground" alt="Dog"/>
        </div>
        <button id="MedicalDocumentsButton">מסמכים רפואים</button>
        <button id="StartGameButton">התחל משחק</button>
    </div>
  )
}

export default App




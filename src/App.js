import "./App.css";
import React, { useState, useContext } from "react";
import Menu from "./components/Menu";
import GameStateContext from "./helpers/ContextProvider";
import Quizz from "./components/Quizz";
import Endscreen from "./components/Endscreen";

function App() {
  const [gameState, setGameState] = useState("menu");
  const [userName, setUserName] = useState("");
  const [score, setScore] = useState(0);

  return (
    <div className='App'>
      <h1>Quizz App</h1>
      <GameStateContext.Provider
        value={{
          gameState,
          setGameState,
          userName,
          setUserName,
          score,
          setScore,
        }}
      >
        <div className='quizz-box'>
          {gameState === "menu" && <Menu />}
          {gameState === "playing" && <Quizz />}
          {gameState === "endscreen" && <Endscreen />}
        </div>
      </GameStateContext.Provider>
    </div>
  );
}

export default App;

import React, { useContext } from "react";
import GameStateContext from "../helpers/ContextProvider";
const Menu = () => {
  const { userName, setUserName, setGameState } = useContext(GameStateContext);
  return (
    <>
      <h5>Enter Your Name:</h5>
      <input
        type='text'
        placeholder='ex '
        value={userName}
        onChange={(e) => setUserName(e.target.value)}
      />
      <button className='control-btn' onClick={() => setGameState("playing")}>
        Start Quiz
      </button>
    </>
  );
};

export default Menu;

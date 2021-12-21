import { useContext } from "react";
import GameStateContext from "../helpers/ContextProvider";
import Questions from "../helpers/Questions";

const Endscreen = () => {
  const { score, setScore, userName, setGameState } =
    useContext(GameStateContext);

  const restartQuizz = () => {
    setScore(0);
    setGameState("menu");
  };
  return (
    <>
      <h4>{userName}, you have finished all the questions of this quizz.</h4>
      <h4>
        Your score is : {score} / {Questions.length}
      </h4>
      <button className='control-btn' onClick={restartQuizz}>
        Retart Quizz
      </button>
    </>
  );
};

export default Endscreen;

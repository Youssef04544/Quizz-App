import Questions from "../helpers/Questions";
import GameStateContext from "../helpers/ContextProvider";
import React, { useState, useContext } from "react";

const Quizz = () => {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [currentAnswer, setCurrentAnswer] = useState("");
  const { score, setScore, setGameState } = useContext(GameStateContext);

  const nextQuestion = () => {
    if (currentAnswer === Questions[currentQuestionIndex].answer) {
      setScore((prevScore) => prevScore + 1);
    }
    setCurrentQuestionIndex((prevIndex) => prevIndex + 1);
  };

  const finishQuizz = () => {
    if (currentAnswer === Questions[currentQuestionIndex].answer) {
      setScore((prevScore) => prevScore + 1);
    }
    setGameState("endscreen");
  };
  return (
    <>
      <h3>{Questions[currentQuestionIndex].prompt}</h3>
      <button onClick={() => setCurrentAnswer("optionA")}>
        {Questions[currentQuestionIndex].optionA}
      </button>
      <button onClick={() => setCurrentAnswer("optionB")}>
        {Questions[currentQuestionIndex].optionB}
      </button>
      <button onClick={() => setCurrentAnswer("optionC")}>
        {Questions[currentQuestionIndex].optionC}
      </button>
      <button onClick={() => setCurrentAnswer("optionD")}>
        {Questions[currentQuestionIndex].optionD}
      </button>
      {currentQuestionIndex < Questions.length - 1 ? (
        <button className='control-btn' onClick={nextQuestion}>
          Next Question
        </button>
      ) : (
        <button className='control-btn' onClick={finishQuizz}>
          Finish Quizz
        </button>
      )}
    </>
  );
};

export default Quizz;

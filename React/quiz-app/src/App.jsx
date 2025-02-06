import { useState } from "react";
import Question from "../components/Question";
import questions from "../utils/questions.json";
import Result from "../components/Result";

const App = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [userAnswers, setUserAnswers] = useState([]);

  const handleNextQuestion = (isCorrect) => {
    setCurrentQuestion(currentQuestion + 1);
    setUserAnswers([...userAnswers, isCorrect]);
  };

  const resetQuiz = () => {
    setCurrentQuestion(0);
    setUserAnswers([]);
  };

  return (
    <div className="flex flex-col text-center items-center mt-5">
      <h1>World Quiz</h1>

      {/* Questions Component */}
      {currentQuestion < questions.length && (
        <Question
          question={questions[currentQuestion]}
          onAnswerClick={handleNextQuestion}
          resetQuiz={resetQuiz}
        />
      )}

      {/* Result Component */}
      {currentQuestion === questions.length && (
        <Result
          userAnswers={userAnswers}
          questions={questions}
          resetQuiz={resetQuiz}
        />
      )}
    </div>
  );
};

export default App;

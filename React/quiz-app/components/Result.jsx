const Result = ({ questions, userAnswers, resetQuiz = () => {} }) => {
  const correctAnswers = userAnswers.filter((answer) => answer).length;

  return (
    <div className="results">
      <h2>Results</h2>
      <p>
        You answered {correctAnswers} out of {questions.length} questions.
        <span className="mx-1.5" onClick={resetQuiz}>
          Click here to Retry
        </span>
      </p>
      <ul>
        {questions.map((question, index) => {
          return (
            <li key={index} data-correct={userAnswers[index]}>
              Q{index + 1}. {question.question}
              <span className="mx-1.5">
                ✅{" "}
                {question.answerOptions.find((option) => option.isCorrect).text}
              </span>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Result;

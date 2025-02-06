const Question = ({ question, onAnswerClick = () => {} }) => {
  return (
    <div className="m-5 w-[60%] border-1 border-amber-300 p-4 rounded-sm">
      <h2>{question.question}</h2>
      <ul className="mt-5 grid grid-cols-[auto_auto] gap-2">
        {question.answerOptions.map(({ text, isCorrect }) => {
          return (
            <li key={text}>
              <button
                className="pt-1 pb-1 bg-amber-200 rounded-xl text-sm m-1 text-slate-900 cursor-pointer w-[100%] hover:bg-amber-400"
                onClick={() => onAnswerClick(isCorrect)}
              >
                {text}
              </button>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Question;

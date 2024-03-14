import React, {useState} from 'react';
import QUESTIONS from '../questions';

/**
 * A component to show the quiz
 *
 * @return {JSX.Element}
 */
export default function Quiz() {
  const [userAnswers, setUserAnswers] = useState([]);
  const activeQuestionIndex = userAnswers.length;
  const shuffledAnswers = [...QUESTIONS[activeQuestionIndex].answers];
  shuffledAnswers.sort(() => Math.random() - 0.5);

  /**
   * To handle the selection of answers
   *
   * @param {string} selectedAnswer
   */
  function handleSelectAnswer(selectedAnswer) {
    setUserAnswers((prevAnswers) => [...prevAnswers, selectedAnswer]);
  }

  return (
    <div id="quiz">
      <div id="question">
        <h2>{QUESTIONS[activeQuestionIndex].text}</h2>
        <ul>
          {shuffledAnswers.map((answer) => (
            <li key={answer} className="answer">
              <button onClick={() => handleSelectAnswer(answer)}>
                {answer}
              </button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
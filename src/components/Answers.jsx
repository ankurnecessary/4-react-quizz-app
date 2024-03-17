import React, {useRef} from 'react';
import PropTypes from 'prop-types';
/**
 * A component to show the answer options of a question in quiz
 *
 * @return {JSX.Element}
 */
function Answers({answers, selectedAnswer, answerState, onSelect}) {
  const shuffledAnswers = useRef();
  if (!shuffledAnswers.current) {
    shuffledAnswers.current = [...answers];
    shuffledAnswers.current.sort(() => Math.random() - 0.5);
  }
  return (
    <ul>
      {answers.map((answer) => {
        const isSelected = answer === selectedAnswer;
        let cssClass = '';

        if (answerState === 'answered' && isSelected) {
          cssClass = 'selected';
        }

        if (
          (answerState === 'correct' || answerState === 'wrong') &&
          isSelected
        ) {
          cssClass = answerState;
        }

        return (
          <li key={answer} className="answer">
            <button onClick={() => onSelect(answer)} className={cssClass}>
              {answer}
            </button>
          </li>
        );
      })}
    </ul>
  );
}

Answers.propTypes = {
  answers: PropTypes.array,
  selectedAnswer: PropTypes.string,
  answerState: PropTypes.string,
  onSelect: PropTypes.func,
};

export default Answers;

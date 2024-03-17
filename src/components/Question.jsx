import React from 'react';
import PropTypes from 'prop-types';
import QuestionTimer from './QuestionTimer';
import Answers from './Answers';
/**
 * A component function to show a quiz question and its answer options
 *
 * @return {JSX.Element}
 */
function Question({
  questionText,
  answers,
  onSelectAnswer,
  selectedAnswer,
  answerState,
  onSkipAnswer,
}) {
  return (
    <div id="question">
      <QuestionTimer timeOut={10000} onTimeOut={onSkipAnswer} />
      <h2>{questionText}</h2>
      <Answers
        answers={answers}
        answerState={answerState}
        selectedAnswer={selectedAnswer}
        onSelect={onSelectAnswer}
      />
    </div>
  );
}

Question.propTypes = {
  questionText: PropTypes.string,
  answers: PropTypes.array,
  onSelectAnswer: PropTypes.func,
  selectedAnswer: PropTypes.string,
  answerState: PropTypes.string,
  onSkipAnswer: PropTypes.func,
};

export default Question;

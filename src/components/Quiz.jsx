import React, {useCallback, useState} from 'react';
import QUESTIONS from '../questions';
import Question from './Question';
import Summary from './Summary';

/**
 * A component to show the quiz
 *
 * @return {JSX.Element}
 */
export default function Quiz() {
  const [userAnswers, setUserAnswers] = useState([]);
  const activeQuestionIndex = userAnswers.length;
  const quizIsComplete = activeQuestionIndex === QUESTIONS.length;

  const handleSelectAnswer = useCallback(
      function handleSelectAnswer(selectedAnswer) {
        setUserAnswers((prevAnswers) => [...prevAnswers, selectedAnswer]);
      },
      [],
  );

  const handleSkipAnswer = useCallback(
      function handleSkipAnswer() {
        handleSelectAnswer(null);
      },
      [handleSelectAnswer],
  );

  if (quizIsComplete) {
    return <Summary userAnswers={userAnswers} />;
  }

  return (
    <div id="quiz">
      <Question
        key={activeQuestionIndex}
        index={activeQuestionIndex}
        onSelectAnswer={handleSelectAnswer}
        onSkipAnswer={handleSkipAnswer}
      />
    </div>
  );
}

import React, {useCallback, useState} from 'react';
import QUESTIONS from '../questions';
import quizCompleteImg from '../assets/quiz-complete.png';
import QuestionTimer from './QuestionTimer';
import Answers from './Answers';

/**
 * A component to show the quiz
 *
 * @return {JSX.Element}
 */
export default function Quiz() {
  const [answerState, setAnswerState] = useState('');
  const [userAnswers, setUserAnswers] = useState([]);
  const activeQuestionIndex =
    answerState === '' ? userAnswers.length : userAnswers.length - 1;
  const quizIsComplete = activeQuestionIndex === QUESTIONS.length;

  const handleSelectAnswer = useCallback(
      function handleSelectAnswer(selectedAnswer) {
        setAnswerState('answered');
        setUserAnswers((prevAnswers) => [...prevAnswers, selectedAnswer]);

        setTimeout(() => {
          if (selectedAnswer === QUESTIONS[activeQuestionIndex].answers[0]) {
            setAnswerState('correct');
          } else {
            setAnswerState('wrong');
          }

          setTimeout(() => {
            setAnswerState('');
          }, 2000);
        }, 1000);
      },
      [activeQuestionIndex],
  );

  const handleSkipAnswer = useCallback(
      function handleSkipAnswer() {
        handleSelectAnswer(null);
      },
      [handleSelectAnswer],
  );

  if (quizIsComplete) {
    return (
      <div id="summary">
        <img src={quizCompleteImg} alt="Quiz is complete" />
        <h2>Quiz is complete</h2>
      </div>
    );
  }

  return (
    <div id="quiz">
      <div id="question">
        <QuestionTimer
          key={activeQuestionIndex}
          timeOut={10000}
          onTimeOut={handleSkipAnswer}
        />
        <h2>{QUESTIONS[activeQuestionIndex].text}</h2>
        <Answers
          key={activeQuestionIndex}
          answers={QUESTIONS[activeQuestionIndex].answers}
          answerState={answerState}
          selectedAnswer={userAnswers[userAnswers.length - 1]}
          onSelect={handleSelectAnswer}
        />
      </div>
    </div>
  );
}

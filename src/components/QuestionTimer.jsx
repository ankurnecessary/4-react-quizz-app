import PropTypes from 'prop-types';
import React, {useEffect, useState} from 'react';

/**
 * To the timer progress for a question.
 *
 * @return {JSX.Element}
 */
function QuestionTimer({timeOut, onTimeOut, mode}) {
  const [remainingTime, setRemainingTime] = useState(timeOut);

  useEffect(() => {
    // console.log('SET TIMEOUT');
    const timer = setTimeout(onTimeOut, timeOut);

    return () => {
      clearTimeout(timer);
    };
  }, [timeOut, onTimeOut]);

  useEffect(() => {
    console.log('SET INTERVAL');
    const interval = setInterval(() => {
      setRemainingTime((prevRemainingTime) => prevRemainingTime - 100);
    }, 100);

    return () => {
      clearInterval(interval);
    };
  }, []);

  return (
    <progress
      id="question-time"
      max={timeOut}
      value={remainingTime}
      className={mode}
    />
  );
}

QuestionTimer.propTypes = {
  timeOut: PropTypes.number,
  onTimeOut: PropTypes.func,
  mode: PropTypes.string,
};

export default QuestionTimer;

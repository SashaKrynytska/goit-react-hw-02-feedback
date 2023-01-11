import React from 'react';
import css from './Feedback.module.css';
import PropTypes from 'prop-types';

const FeedbackOptions = ({ options, onLeaveFeedback }) =>
  options.map(option => {
    return (
      <>
        <button
          type="button"
          key={option}
          className={css.feedback_button}
          onClick={() => onLeaveFeedback(option)}
        >
          {option}
        </button>
      </>
    );
  });

// training ===========
// const Controls = ({
//   onIncrementGood,
//   onIncrementNeutral,
//   onIncrementBad,
// }) => (
//   <div className="Feedback__controls">
//     <button
//       type="button"
//       className="Feedback__button"
//       onClick={onIncrementGood}
//     >
//       Good
//     </button>
//     <button
//       type="button"
//       className="Feedback__button"
//       onClick={onIncrementNeutral}
//     >
//       Neutral
//     </button>
//     <button type="button" className="Feedback__button" onClick={onIncrementBad}>
//       Bad
//     </button>
//   </div>
// );

FeedbackOptions.propTypes = {
  options: PropTypes.arrayOf(PropTypes.string).isRequired,
  onLeaveFeedback: PropTypes.func.isRequired,
};

export default FeedbackOptions;

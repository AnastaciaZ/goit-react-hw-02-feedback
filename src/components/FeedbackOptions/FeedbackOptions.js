import React from 'react';
import s from '../FeedbackOptions/FeedbackOptions.module.css';

const FeedbackOptions = ({ options, onLeaveFeedback }) => {
    const { good, neutral, bad } = options;
return (
    <div>
        <button type="button" name={good} className={s.feedbackBtn} onClick={()=>onLeaveFeedback('good')}>Good</button>
        <button type="button" name={neutral} className={s.feedbackBtn} onClick={()=>onLeaveFeedback('neutral')}>Neutral</button>
        <button type="button" name={bad} className={s.feedbackBtn} onClick={()=>onLeaveFeedback('bad')}>Bad</button>
    </div >
    );
};

export default FeedbackOptions;

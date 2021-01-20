import React from 'react';
import s from './Statistics.module.css';

const Statistics = ({ good, neutral, bad, total, positivePercentage}) => {
    return (
        <div>
            <p className={ s.text}>Good: {good}</p>
            <p className={ s.text}>Neutral: {neutral}</p>
            <p className={ s.text}>Bad: {bad}</p>
            <p className={ s.totalText}>Total: {total }</p>
           <p className={ s.totalText}>Positive feetback: { positivePercentage}%</p>
        </div>
    );

};

export default Statistics;

import React from 'react';
//import s from './Statistics.module.css';

const Statistics = ({ good, neutral, bad, total, positivePercentage}) => {
    return (
        <div>
           <p>Good: {good}</p>
            <p>Neutral: {neutral}</p>
            <p>Bad: {bad}</p>
            <p>Total: {total }</p>
           <p>Positive feetback: { positivePercentage}%</p>
        </div>
    );

};

export default Statistics;

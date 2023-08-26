import React from 'react';

export const Statistics = ({ good, neutral, bad, total, positivePercentage,title }) => {
    return (
        <div>
            <h1>{title}</h1>
            <p>Good: {good}</p>
            <p>Neutral: {neutral}</p>
            <p>Bad: {bad}</p>
            <p>Total Feedback: {total}</p>
            <p>Positive Feedback Percentage: {positivePercentage}%</p>
        </div>
    );
};

export default Statistics;

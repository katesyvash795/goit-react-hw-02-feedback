import React from 'react';

export const FeedbackOptions = ({ options, onLeaveFeedback,title }) => {
    return (
        <div>
            <h1>{title}</h1>
            {options.map(option => (
                <button key={option} onClick={() => onLeaveFeedback(option)}>
                    {option}
                </button>
            ))}
        </div>
    );
};

export default FeedbackOptions;

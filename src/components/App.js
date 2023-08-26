import React, { Component } from 'react';
import FeedbackOptions from './FeedbackOption/FeedbackOption';
import Statistics from './Statistics/Statistics';
import Section from './Section/Section';
import Notification from './Notification/Notification';

class App extends Component {
    state = {
    good: 0,
    neutral: 0,
    bad: 0,
    };

    handleLeaveFeedback = option => {
    this.setState(prevState => ({
        [option]: prevState[option] + 1,
    }));
    };

    countTotalFeedback = () => {
    const { good, neutral, bad } = this.state;
    return good + neutral + bad;
    };

    countPositiveFeedbackPercentage = () => {
    const { good } = this.state;
    const totalFeedback = this.countTotalFeedback();
    return totalFeedback === 0 ? 0 : Math.round((good / totalFeedback) * 100);
    };

    render() {
    const { good, neutral, bad } = this.state;
    const totalFeedback = this.countTotalFeedback();
    const positivePercentage = this.countPositiveFeedbackPercentage();
    const options = Object.keys(this.state);

    return (
        <div>
        <Section title="Please leave feedback">
            <FeedbackOptions
            options={options}
            onLeaveFeedback={this.handleLeaveFeedback}
            />
        </Section>
        <Section title="Statistics">
            {totalFeedback > 0 ? (
            <Statistics
                good={good}
                neutral={neutral}
                bad={bad}
                total={totalFeedback}
                positivePercentage={positivePercentage}
            />
            ) : (
            <Notification message="There is no feedback" />
            )}
        </Section>
        </div>
    );
    }
}

export default App;

import React from 'react';
import Section from './components/Section/Section' ;
import FeedbackOptions from './components/FeedbackOptions/FeedbackOptions';
import Statistics from './components/Statistics/Statistics';
import Notification from './components/Notification/Notification';
import s from './App.module.css';

class App extends React.Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

   handlFeedback = feedback => {
    this.setState(state => {
      return {[feedback]: state[feedback] + 1};
    });
  };

    countTotalFeedback = () => {
      return Object.values(this.state).reduce((acc, value) => acc + value, 0);
    };

    countPositiveFeedbackPercentage = () => {
      const percentage = Math.round(100 * this.state.good / this.countTotalFeedback());
      return percentage > 0 ? percentage : 0;
    };

  render() {
    return (
      <div className={s.container}>
        <Section title="Please leave feedback">
          <FeedbackOptions
            options={this.state}
            onLeaveFeedback={this.handlFeedback}
          />
          </Section>
        <Section title="Statistics" >
          {this.countTotalFeedback() > 0
            ? <Statistics
            good={this.state.good}
            neutral={this.state.neutral}
            bad={this.state.bad}
            total={this.countTotalFeedback() }
            positivePercentage={this.countPositiveFeedbackPercentage() }
          />
            :<Notification/>}
         </Section>                
      </div>
    );
  };
};

export default App;

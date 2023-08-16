import React, { useState } from 'react';
import css from './App.module.css';

import Section from './Section/Section';
import FeedbackOptions from './FeedbackOptions/FeedbackOptions';
import Statistics from './Statistics/Statistics';
import Notification from './Notification/Notification';

const App = () => {
  const [good, setgood] = useState(0);
  const [neutral, setneutral] = useState(0);
  const [bad, setbad] = useState(0);

  const onLeaveFeedback = name => {
    
    if (name === 'good') {
      setgood(good + 1);
    } else if (name === 'neutral') {
      setneutral(neutral + 1);
    } else {
      setbad(bad + 1);
    }

    // setState(prevState => ({
    //  [state]: prevState[state] + 1,
    //  }));
  };

  const countTotalFeedback = () => {
    
    return good + neutral + bad;
  };

  const countPositiveFeedbackPercentage = () => {
    
    return Math.round((good / countTotalFeedback()) * 100);
  };

  return (
    <div className={css.container}>
      <Section title="Please leave feedback">
        <FeedbackOptions
          options={{ good, neutral, bad }}
          onLeaveFeedback={onLeaveFeedback}
        />
      </Section>
      <Section title="Statistics">
        {countTotalFeedback() > 0 ? (
          <Statistics
            good={good}
            neutral={neutral}
            bad={bad}
            total={countTotalFeedback()}
            positivePercentage={countPositiveFeedbackPercentage()}
          />
        ) : (
          <Notification message="There is no feedback" />
        )}
      </Section>
    </div>
  );
};

export default App;

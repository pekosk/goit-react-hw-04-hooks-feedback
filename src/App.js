import './App.css';
import { useState } from 'react';
import Section from './components/Section';
import Feedback from './components/Feedback';
import Statistics from './components/Statistics';
import Notification from './components/Notification';

function App() {
  const initialState = { good: 0, neutral: 0, bad: 0 };
  const options = ['good', 'neutral', 'bad'];

  const [state, setState] = useState(initialState);

  const countTotalFeedback = state.good + state.neutral + state.bad;

  const onStatBtnClick = (option) => {
    setState({ ...state, [option]: state[option] + 1, })
  };

  const countPositiveFeedbackPercentage = Math.round((state.good / countTotalFeedback) * 100);

  return (
    <>
      <Section title="Please leave feedback">
        <Feedback options={options}
          onLeaveFeedback={onStatBtnClick} />
      </Section>
      <Section title="Statistics">
        {countTotalFeedback ? (
          < Statistics
            good={state.good}
            neutral={state.neutral}
            bad={state.bad}
            total={countTotalFeedback}
            positivePercentage={countPositiveFeedbackPercentage} />) : (<Notification message="There is no feedback" />)}
      </Section>
    </>
  );
}

export default App;

import './App.module.css';
import { useState } from 'react';
import Section from './components/Section';
import Feedback from './components/Feedback';
import Statistics from './components/Statistics';
import Notification from './components/Notification';

const initialState = {
  good: 0,
  neutral: 0,
  bad: 0,
};
const options = ['good', 'neutral', 'bad'];
function App() {
  const [state, setState] = useState(initialState);

  const onStatBtnClick = (option) => {
    setState({ ...state, [option]: state[option] + 1, })
  };

  const countTotalFeedback = state.good + state.neutral + state.bad;

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

import './App.css';
import React, { Component } from 'react';
import Section from './components/Section';
import Feedback from './components/Feedback';
import Statistics from './components/Statistics';
import Notification from './components/Notification';

class App extends Component {

  state = {
    good: 0,
    neutral: 0,
    bad: 0
  };

  options = ['good', 'neutral', 'bad'];

  countTotalFeedback = () => {
    const { good, neutral, bad } = this.state;
    return good + neutral + bad;
  };

  onStatBtnClick = event => {
    const currentStatBtnValue = event.currentTarget.value;
    this.setState(state => ({ [currentStatBtnValue]: state[currentStatBtnValue] + 1, }))
  };

  countPositiveFeedbackPercentage = () => {
    return Math.round((this.state.good / this.countTotalFeedback()) * 100);
  };

  render() {
    const { good, neutral, bad } = this.state;
    return (
      <>
        <Section title="Please leave feedback">
          <Feedback options={this.options}
            onLeaveFeedback={this.onStatBtnClick} />
        </Section>
        <Section title="Statistics">
          {this.countTotalFeedback() ? (
            < Statistics
              good={good}
              neutral={neutral}
              bad={bad}
              total={this.countTotalFeedback()}
              positivePercentage={this.countPositiveFeedbackPercentage()} />) : (<Notification message="There is no feedback" />)}
        </Section>
      </>
    );
  }
}

export default App;

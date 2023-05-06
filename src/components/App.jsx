import React, { Component } from 'react';
import Statistics from './Statistics/Statistics';
import Section from './Section/Section';
import FeedbackOptions from './FeedbackOptions/FeedbackOptions';
export default class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };
  handleGood = () => {
    this.setState(prev => ({
      good: prev.good + 1,
    }));
  };
  handleNeutral = () => {
    this.setState(prev => ({
      neutral: prev.neutral + 1,
    }));
  };
  handleBad = () => {
    this.setState(prev => ({
      bad: prev.bad + 1,
    }));
  };
  countTotal = () => {
    const sum = this.state.good + this.state.neutral + this.state.bad;
    return sum;
  };
  countPositiveFeedbackPercentage = () => {
    const total = this.countTotal();
    return total ? Math.round((this.state.good / total) * 100) : 0;
  };
  onLeaveFeedbackHandler = option => {
    switch (option) {
      case 'good':
        
        break;
    
      default:
        break;
    }
  };
  render() {
    return (
      <div
        style={{
          height: '100vh',
          fontSize: 40,
          color: '#010101',
          textAlign: 'center',
        }}
      >
        <Section title="Please Leave Feedback">
          <FeedbackOptions options={['good', 'neutral', 'bad']} />
        </Section>
        <Section title="Statistics">
          <Statistics
            good={this.state.good}
            neutral={this.state.neutral}
            bad={this.state.bad}
            total={0}
            positivePercentage={0}
          />
        </Section>
      </div>
    );
  }
}

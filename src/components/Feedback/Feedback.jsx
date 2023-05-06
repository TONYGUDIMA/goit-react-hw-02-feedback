import PropTypes from 'prop-types';
import React from 'react';
import css from './Feedback.module.css';

class Feedback extends React.Component {
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
    let sum = this.state.good + this.state.neutral + this.state.bad;
    return sum;
  };
  render() {
    return (
      <div>
        <h1>Please Leave feedback</h1>
        <div className={css.buttons}>
          <button
            className={css.button}
            type="button"
            onClick={this.handleGood}
          >
            Good
          </button>
          <button
            className={css.button}
            type="button"
            onClick={this.handleNeutral}
          >
            Neutral
          </button>
          <button className={css.button} type="button" onClick={this.handleBad}>
            Bad
          </button>
        </div>
        <h2>Statistic</h2>
        <p>Good : {this.state.good}</p>
        <p>Neutral : {this.state.neutral}</p>
        <p>Bad : {this.state.bad}</p>
        <p>Total : {this.countTotal()}</p>
      </div>
    );
  }
}

export default Feedback;

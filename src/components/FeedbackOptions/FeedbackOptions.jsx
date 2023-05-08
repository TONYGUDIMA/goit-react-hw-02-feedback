import React, { Component } from 'react';
import css from './FeedbackOptions.module.css';
export default class FeedbackOptions extends Component {
  render() {
    return (
      <div>
        {this.props.options.map(el => {
          return (
            <button
              onClick={this.props.onLeaveFeedbackHandler.bind(this, el)}
              className={css.button}
              key={el}
            >
              {el}
            </button>
          );
        })}
      </div>
    );
  }
}
// <button className={css.button} type="button" onClick={this.handleGood}>
//   Good
// </button>
// <button
//   className={css.button}
//   type="button"
//   onClick={this.handleNeutral}
// >
//   Neutral
// </button>
// <button className={css.button} type="button" onClick={this.handleBad}>
//   Bad
// </button>

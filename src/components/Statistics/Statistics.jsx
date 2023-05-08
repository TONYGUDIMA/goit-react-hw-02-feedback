import React, { Component } from 'react';

export default class Statistics extends Component {
  render() {
    return (
      <div>
        <p>Good : {this.props.good}</p>
        <p>Neutral : {this.props.neutral}</p>
        <p>Bad : {this.props.bad}</p>
        <p>Total : {this.props.total}</p>
        <p>Positive Percentage : {this.props.positivePercentage}%</p>
      </div>
    );
  }
}

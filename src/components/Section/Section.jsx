import React, { Component } from 'react';

export default class Section extends Component {
  render() {
    return (
      <>
        <h1>{this.props.title}</h1>
        {this.props.children}
      </>
    );
  }
}

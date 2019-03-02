﻿import React, { Component } from 'react';
import './TicTacToe.css';

export class Square extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: null
    };
  }

  render() {
    return (
      <button
          className='square'
          onClick={() => this.props.onClick()}

      >
        {this.props.value}
      </button>
    );
  }
}
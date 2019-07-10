import React, { Component } from 'react';
import './style.css';

export default class Clock extends Component {
    render() {
        let { time } = this.props;
        return (
            <p className="clock">{this.renderTime(time)}</p>
        );
    }

    renderTime(time = 0) {
        return new Date(time * 1000).toISOString().substr(11, 8);
    }
}
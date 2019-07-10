import React, { Component } from 'react';
import './style.css';

export default class Button extends Component {
    render() {
        return (
            <button className={'btn ' + this.props.type} onClick={this.props.onClickHandler} disabled={this.props.disabled}>{this.props.label}</button>
        );
    }
}
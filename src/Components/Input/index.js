import React, { Component } from 'react';
import './style.css';

export default class Input extends Component {
    render() {
        return (
            <input className="input" type={this.props.type} placeholder={this.props.children}
                onInput={this.props.onInputHandler} disabled={this.props.disabled} />
        );
    }
}
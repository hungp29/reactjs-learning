import React, { Component } from 'react';
import { Button } from 'antd';
import './style.css';

export default class Key extends Component {

    render() {
        return (
            <Button
                className={'key ' + this.props.type}
                onClick={() => { this.props.onClickHandle(this.props) }}>
                {this.props.value}
            </Button>
        );
    }
}
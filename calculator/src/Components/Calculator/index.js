import React, { Component } from 'react';
import './style.css';

const calculator = {
    firstOperand: null,
    operator: null,
    waitingForSecondOperand: false
};
const calculation = {
    ':': (firstOperand, secondOperand) => firstOperand / secondOperand,

    'x': (firstOperand, secondOperand) => firstOperand * secondOperand,

    '+': (firstOperand, secondOperand) => firstOperand + secondOperand,

    '-': (firstOperand, secondOperand) => firstOperand - secondOperand,

    '=': (firstOperand, secondOperand) => secondOperand
};
export default class Calculator extends Component {

    state = {
        displayValue: '0'
    };

    static getDerivedStateFromProps(props, state) {
        if (props.keyValue) {
            switch (props.keyValue.type) {
                case 'digit':
                    if (props.keyValue.value !== '.') {
                        return { displayValue: Calculator.inputDigit(props.keyValue.value, state) };
                    }
                    else {
                        return { displayValue: Calculator.inputDot(props.keyValue.value, state) };
                    }
                case 'operator':
                    return { displayValue: Calculator.inputOperator(props.keyValue.value, state) };
                case 'function':
                    if (props.keyValue.value === 'AC') {
                        return { displayValue: Calculator.reset() };
                    } else if (props.keyValue.value === '+/-') {
                        return { displayValue: Calculator.negate(state) };
                    } else if (props.keyValue.value === '%') {
                        return { displayValue: Calculator.percent(state) };
                    }
                default:
                    break;
            }
        }
        return null;
    }

    render() {
        return (
            <input className="screen" type="text" value={this.state.displayValue} disabled />
        );
    }

    static percent(prevState) {
        calculator.waitingForSecondOperand = false;
        return parseFloat(prevState.displayValue) / 100;
    }

    static negate(prevState) {
        return parseFloat(prevState.displayValue) * -1;
    }

    static reset() {
        calculator.firstOperand = null;
        calculator.operator = null;
        calculator.waitingForSecondOperand = false;
        return '0';
    }

    static inputOperator(nextOperator, prevState) {
        const { firstOperand, operator, waitingForSecondOperand } = calculator;
        const value = parseFloat(prevState.displayValue);
        let valueCalc = value;
        console.log(value)

        if (operator && waitingForSecondOperand) {
            calculator.operator = nextOperator;
            return valueCalc;
        }

        if (firstOperand === null) {
            calculator.firstOperand = value;
        } else if (operator) {
            console.log(firstOperand, value, operator, nextOperator)
            valueCalc = calculation[operator](firstOperand, value);
            calculator.firstOperand = valueCalc;
        }

        calculator.waitingForSecondOperand = true;
        calculator.operator = nextOperator;

        return String(valueCalc);
    }

    static inputDot(dot, prevState) {
        const { waitingForSecondOperand } = calculator;
        if (waitingForSecondOperand) {
            calculator.waitingForSecondOperand = false;
            return '0' + dot;
        } else if (!prevState.displayValue.includes(dot)) {
            return prevState.displayValue + dot;
        }
        return prevState.displayValue;
    }
    static inputDigit(digit, prevState) {
        const { displayValue } = prevState;
        const { waitingForSecondOperand } = calculator;

        if (waitingForSecondOperand) {
            calculator.waitingForSecondOperand = false;
            return digit;
        } else {
            return displayValue === '0' ? digit : displayValue + digit;
        }
    }
}
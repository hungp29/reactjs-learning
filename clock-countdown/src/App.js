import React, { Component } from 'react';
import './App.css';
import Input from './Components/Input';
import Button from './Components/Button';
import Clock from './Components/Clock';

class App extends Component {
  countdownVal = {
    label: 'Countdown',
    type: 'green'
  };

  stopVal = {
    label: 'Stop',
    type: 'red'
  };

  state = {
    time: 0,
    countdown: this.countdownVal,
    disabled: false
  };

  componentDidMount() {

  }

  render() {
    return (
      <div className="app">
        <div className="box">
          <Clock time={this.state.time} />
          <Input onInputHandler={this.onInput} type="number" disabled={this.state.disabled}>Input the seconds value</Input>

          <div className="btn-group">
            <Button label="Submit" type="blue" onClickHandler={this.onSubmitClick} disabled={this.state.disabled} />
            <Button label={this.state.countdown.label} type={this.state.countdown.type} onClickHandler={this.onCountdownClick} />
          </div>
        </div>
      </div>
    );
  }

  onInput = (e) => {
    this.inputTime = e.target.value;
  }

  onSubmitClick = () => {
    this.setState({ time: this.inputTime, countdown: this.countdownVal });
  }

  onCountdownClick = () => {
    if (this.state.countdown.label === this.countdownVal.label) {
      this.countdown();
    } else {
      this.stop();
    }
  }

  countdown = () => {
    if (this.state.time > 0) {
      this.setState({ countdown: this.stopVal, disabled: true });
      this.decreaseTime();

      this.intervalDecreaseTime = setInterval(() => {
        this.decreaseTime();
      }, 1000);
    }
  }

  stop = () => {
    clearInterval(this.intervalDecreaseTime);
    this.setState({ countdown: this.countdownVal, disabled: false });
  }

  decreaseTime = () => {
    this.setState({ time: this.state.time - 1 }, () => {
      if (this.state.time === 0) {
        this.stop();
      }
    });

  }

}

export default App;

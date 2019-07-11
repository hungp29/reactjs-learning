import React, { Component } from 'react';
import './App.css';
import { Card, Row, Col } from 'antd';
import 'antd/dist/antd.css';
import Key from './Components/Key';
import Calculator from './Components/Calculator';
import keys from './keys.json';

class App extends Component {

  state = {
    keyValue: null
  };

  render() {
    return (
      <div className="app">
        <Card className="custome-card">
          <Row type="flex">
            <Calculator keyValue={this.state.keyValue} />
          </Row>

          {keys.map((row, index) => (
            <Row className={'row-' + index} type="flex" key={index}>
              {row.map((key, index) => (
                <Col key={index} span={6 * key.cell}>
                  <Key type={key.type} value={key.value}
                    onClickHandle={this.onClickKeyHandle} />
                </Col>
              ))}
            </Row>
          ))}

        </Card>
      </div>
    );
  }

  onClickKeyHandle = (key) => {
    this.setState({ keyValue: key });
  }
}


export default App;

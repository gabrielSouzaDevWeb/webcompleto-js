import { Component } from 'react';
import Button from '../components/ui/button/Button.jsx';
import Display from '../components/ui/display/Display.jsx';
import './Calculator.css';

export default class Calculator extends Component {
  initialState = {
    displayValue: '0',
    clearDisplay: false,
    operation: null,
    values: [0, 0],
    current: 0,
  };

  state = { ...this.initialState };
  constructor(props) {
    super(props);
    this.clearMemory = this.clearMemory.bind(this);
    this.setOperation = this.setOperation.bind(this);
    this.addDigit = this.addDigit.bind(this);
  }

  clearMemory() {
    this.state = this.initialState;
  }
  setOperation(operation) {
    console.log(operation);
  }
  addDigit(n) {
    if (
      n === '.' &&
      this.state.displayValue.includes('.')
    ) {
      return;
    }
    const clearDisplay =
      this.state.displayValue === '0' ||
      this.state.clearDisplay;
    const currentValue = clearDisplay
      ? ''
      : this.state.displayValue;
    const displayValue = currentValue + n;
    console.log(displayValue);
    this.setState({
      displayValue,
      clearDisplay: false,
    });
  }

  render() {
    const { displayValue } = this.state;
    return (
      <div className="calculator">
        <Display value={displayValue} />
        <Button
          label="AC"
          click={this.clearMemory}
          triple
        />
        <Button
          label="/"
          click={this.setOperation}
          operation
        />
        <Button label="7" click={this.addDigit} />
        <Button label="8" click={this.addDigit} />
        <Button label="9" click={this.addDigit} />
        <Button
          label="*"
          click={this.setOperation}
          operation
        />
        <Button label="4" click={this.addDigit} />
        <Button label="5" click={this.addDigit} />
        <Button label="6" click={this.addDigit} />
        <Button
          label="-"
          click={this.setOperation}
          operation
        />
        <Button label="1" click={this.addDigit} />
        <Button label="2" click={this.addDigit} />
        <Button label="3" click={this.addDigit} />
        <Button
          label="+"
          click={this.setOperation}
          operation
        />
        <Button label="0" click={this.addDigit} double />
        <Button label="." />
        <Button label="=" operation />
      </div>
    );
  }
}

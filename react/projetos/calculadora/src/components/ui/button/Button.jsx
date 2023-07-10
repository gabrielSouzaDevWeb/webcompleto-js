import { Component } from 'react';
import './Button.css';

export default class Button extends Component {
  state = this.props;
  constructor(props) {
    super(props);
  }
  render() {
    const {
      label,
      operation,
      double,
      triple,
      click = () => {
        console.error('click fun is undefined');
      },
    } = this.state;
    return (
      <button
        className={`button
    ${operation ? 'operation' : ''}
    ${double ? 'double' : ''}
    ${triple ? 'triple' : ''}
    `}
        onClick={(e) => click(label)}
      >
        {label}
      </button>
    );
  }
}

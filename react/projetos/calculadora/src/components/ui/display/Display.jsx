import { Component } from 'react';
import './Display.css';

export default class Display extends Component {
  state = this.props;
  constructor(props) {
    super(props);
  }
  render() {
    const { value } = this.props;
    return <div className="display">{value}</div>;
  }
}

import React from 'react';
import './Logo.css';

export default class Logo extends React.Component {
  state = this.props;
  constructor(props) {
    super(props);
  }
  render() {
    return <aside className="logo">Logo</aside>;
  }
}

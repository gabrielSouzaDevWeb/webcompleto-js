import React from 'react';
import './Header.css';

export default class Header extends React.Component {
  state = this.props;
  constructor(props) {
    super(props);
  }
  render() {
    return <header className="reader">Header</header>;
  }
}

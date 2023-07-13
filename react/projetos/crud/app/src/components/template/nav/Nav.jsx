import React from 'react';
import './Nav.css';

export default class Nav extends React.Component {
  state = this.props;
  constructor(props) {
    super(props);
  }
  render() {
    return <nav className="menu-area">Navegação</nav>;
  }
}

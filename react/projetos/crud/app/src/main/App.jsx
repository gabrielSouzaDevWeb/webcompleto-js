import React from 'react';
import './App.css';

import {
  Footer,
  Logo,
  Main,
  Nav,
} from '../components/template/index';

export default class App extends React.Component {
  state = this.props;
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className="app">
        <Logo />
        <Nav />
        <Main />
        <Footer />
      </div>
    );
  }
}

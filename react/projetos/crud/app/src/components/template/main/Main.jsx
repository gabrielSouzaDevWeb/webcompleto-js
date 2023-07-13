import React, { Component } from 'react';
import Header from '../header/Header';
import './Main.css';

export default class Main extends Component {
  state = this.props;
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <React.Fragment>
        <Header />
        <main className="content">Contéudo</main>
      </React.Fragment>
    );
  }
}

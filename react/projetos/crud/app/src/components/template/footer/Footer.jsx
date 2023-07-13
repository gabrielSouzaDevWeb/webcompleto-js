import React from 'react';
import './Footer.css';

export default class Footer extends React.Component {
  state = this.props;
  constructor(props) {
    super(props);
  }
  render() {
    return <footer className="footer">Rodapé</footer>;
  }
}

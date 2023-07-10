import { Component } from 'react';

export default class Saudacao extends Component {
  // state = this.props;
  state = this.props;

  constructor(props) {
    super(props);
    this.setTipo = this.setTipo.bind(this);
    // this.setNome = this.setTipo.bind(this);
  }
  setTipo(event) {
    this.setState({ tipo: event.target.value });
  }
  setNome(event) {
    this.setState({ nome: event.target.value });
  }

  render() {
    const { tipo, nome } = this.state;
    return (
      <>
        <h1>
          {tipo}, {nome}!
        </h1>
        <hr />
        <input
          type="text"
          placeholder="Tipo..."
          value={tipo}
          onChange={this.setTipo}
        />
        <br />
        <br />
        <input
          type="text"
          placeholder="Nome..."
          value={nome}
          onChange={(event) => this.setNome(event)}
        />
      </>
    );
  }
}

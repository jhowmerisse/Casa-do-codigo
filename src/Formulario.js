import React from "react";

class Formulario extends React.Component {
  constructor(props) {
    super(props);

    this.initialState = {
      nome: "",
      livro: "",
      preco: "",
    };

    this.state = this.initialState;
  }

  submitForm = () => {
    this.props.insertAutor(this.state);
    this.setState(this.initialState);
  };

  insertAutor = (event) => {
    const { name, value } = event.target;

    this.setState({
      [name]: value
    });
  };

  render() {
    const { nome, livro, preco } = this.state;

    return (
      <form>
        <label htmlFor="nome">Nome</label>
        <input
          id="nome"
          type="text"
          name="nome"
          value={nome}
          onChange={this.insertAutor}
        />

        <label htmlFor="livro">Livro</label>
        <input
          id="livro"
          type="text"
          name="livro"
          value={livro}
          onChange={this.insertAutor}
        />

        <label htmlFor="preco">Preço</label>
        <input
          id="preco"
          type="text"
          name="preco"
          value={preco}
          onChange={this.insertAutor}
        />

        <button type="button" onClick={this.submitForm}>
          Salvar
        </button>
      </form>
    );
  }
}

export default Formulario;

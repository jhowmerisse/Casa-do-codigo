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
      [name]: value,
    });
  };

  render() {
    const { nome, livro, preco } = this.state;

    return (
      <form>
        <div className="row">
          <div className="input-field col s4">
            <label htmlFor="nome" className="input-field">
              Nome
            </label>
            <input
              className="validate"
              id="nome"
              type="text"
              name="nome"
              value={nome}
              onChange={this.insertAutor}
            />
          </div>
          <div className="input-field col s4">
            <label htmlFor="livro" className="input-field">
              Livro
            </label>
            <input
              className="validate"
              id="livro"
              type="text"
              name="livro"
              value={livro}
              onChange={this.insertAutor}
            />
          </div>
          <div className="input-field col s4">
            <label htmlFor="preco" className="input-field">
              Preço
            </label>
            <input
              className="validate"
              id="preco"
              type="text"
              name="preco"
              value={preco}
              onChange={this.insertAutor}
            />
          </div>
          <button
            className="waves-effect waves-light indigo lighten-2 btn"
            type="button"
            onClick={this.submitForm}
          >
            Salvar
          </button>
        </div>
      </form>
    );
  }
}

export default Formulario;

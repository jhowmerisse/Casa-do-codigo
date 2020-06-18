import React, { Fragment } from "react";
import "./App.css";
import Table from "./Table";
import Formulario from "./Formulario";

class App extends React.Component {
  state = {
    autores: [
      {
        nome: "Paulo",
        livro: "React",
        preco: "1000",
      },
      {
        nome: "Daniel",
        livro: "Java",
        preco: "99",
      },
      {
        nome: "Marcos",
        livro: "Design",
        preco: "150",
      },
      {
        nome: "Bruno",
        livro: "DevOps",
        preco: "100",
      },
    ],
  };

  removeAutor = (index) => {
    const { autores } = this.state;

    this.setState({
      autores: autores.filter((autor, posAtual) => {
        return posAtual != index;
      }),
    });
  };

  insertAutor = (autor) => {
    this.setState({
      autores: [...this.state.autores, autor]
    });
  };

  render() {
    return (
      <Fragment>
        <Table autores={this.state.autores} removeAutor={this.removeAutor} />
        <Formulario insertAutor={this.insertAutor} />
      </Fragment>
    );
  }
}

export default App;

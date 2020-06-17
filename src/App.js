import React from "react";
import "./App.css";
import Table from "./Table";
import { render } from "@testing-library/react";

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

  render() {
    return (
      <div className="App">
        <Table autores={this.state.autores} removeAutor={this.removeAutor} />
      </div>
    );
  }
}

export default App;

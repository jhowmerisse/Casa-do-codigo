import React from "react";
import "./App.css";
import Table from "./Table";

const autores = [
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
];

function App() {
  return (
    <div className="App">
      <Table autores={autores} />
    </div>
  );
}

export default App;

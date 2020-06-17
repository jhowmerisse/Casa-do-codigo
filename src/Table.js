import React from "react";

const TableHead = () => {
  return (
    <thead>
      <tr>
        <th>Autores</th>
        <th>Livros</th>
        <th>Preços</th>
        <th>Remover</th>
      </tr>
    </thead>
  );
};

const TableBody = ({ autores, removeAutor }) => {
  const linhas = autores.map((linha, index) => {
    return (
      <tr>
        <td>{linha.nome}</td>
        <td>{linha.livro}</td>
        <td>{linha.preco}</td>
        <td>
          <button onClick={() => removeAutor(index)}>remover</button>
        </td>
      </tr>
    );
  });

  return <tbody>{linhas}</tbody>;
};

class Table extends React.Component {
  render() {
    const { autores, removeAutor } = this.props;
    return (
      <table>
        <TableHead />
        <TableBody autores={autores} removeAutor={removeAutor} />
      </table>
    );
  }
}

export default Table;

import React, {Component} from 'react';

// Simple component
const TableHeader = () => {
  return (
    <thead>
      <tr>
          <th>Name</th>
          <th>Job</th>
          <th>Remove</th>
      </tr>
    </thead>
  );
}

// Simple component
const TableBody = props => {
    const rows = props.characterData.map((row, index) => {
      return (
        <tr key={index}>
          <td>{row.name}</td>
          <td>{row.job}</td>
          <td><button onClick={() => props.removeCharacter(index)}>Delete</button></td>
        </tr>
      );
    });

    return <tbody>{rows}</tbody>;
}

const TableFooter = () => {
  return (
    <tfoot>
      <tr>
          <td colSpan="3">Footer</td>
      </tr>
    </tfoot>
  );
}

// Class component
class Table extends Component {
  render() {
    const { characterData, removeCharacter } = this.props; // Gain access to props in Table
    console.log(characterData);

    return (
      <table>
        <TableHeader />
        <TableBody characterData={characterData} removeCharacter={removeCharacter} />
        <TableFooter />
      </table>
    );
  }
}

export default Table;
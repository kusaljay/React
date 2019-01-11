import React, {Component} from 'react';

// Simple component
const TableHeader = () => {
  return (
    <thead>
      <tr>
          <th>Name</th>
          <th>Job</th>
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
        </tr>
      );
    });

    return <tbody>{rows}</tbody>;
}

//Class component
class Table extends Component {
  render() {
    const { characterData } = this.props; // Gain access to props in Table
    console.log(characterData);
    /* const { workPlaceData } = this.props; // Gain access to props in Table
    console.log(workPlaceData); */

    return (
      <table>
        <TableHeader />
        <TableBody characterData={characterData} />
      </table>
    );
  }
}

export default Table;
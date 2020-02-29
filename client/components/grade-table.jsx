import React from 'react';

export default class GradeTable extends React.Component {
  render() {
    return (
      <table className="table table-striped col-8">
        <thead className="thead-light">
          <tr>
            <th className="col-4">Name</th>
            <th className="col-2">grade</th>
            <th className="col-2">course</th>
          </tr>
        </thead>
        <tbody>{this.props.grades}</tbody>
      </table>
    );
  }
}

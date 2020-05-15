import React from 'react';

export default class GradeTable extends React.Component {
  render() {
    return (
      <table className="m-2 table table-responsive table-success table-striped border border-warning">
        <thead className="thead-light table-responsive">
          <tr>
            <th>Item</th>
            <th>Quantity</th>
            <th>Note</th>
            <th>Got It?</th>
            <th> </th>
          </tr>
        </thead>
        <tbody>{this.props.grades}</tbody>
      </table>
    );
  }
}

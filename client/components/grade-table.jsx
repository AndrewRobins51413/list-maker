import React from 'react';

export default class GradeTable extends React.Component {
  render() {
    return (
      <table className=" table table-success table-striped">
        <thead className="thead-light col-md-8 col-sm-8 ">
          <tr>
            <th>Item</th>
            <th>Quantity</th>
            <th>Note</th>
            <th>Got It?</th>
          </tr>
        </thead>
        <tbody>{this.props.grades}</tbody>
      </table>
    );
  }
}

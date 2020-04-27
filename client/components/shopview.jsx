import React from 'react';
import DateTimePicker from 'react-datetime-picker';
// import GradeTable from './grade-table';

class ShopView extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      date: '',
      time: '',
      grades: []
    };
    // this.shopView = this.shopView.bind(this);
  }

  // shopView() {
  //   var dateTime = new Date();
  //   dateTime.setHours(dateTime.getHours(), dateTime.getMinutes() +1,0,0);
  //   this.setState(
  //     date : dateTime,
  //     time:dateTime.toLocaleTimeString()
  //   );
  // }

  render() {

    return (
      <div>
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
        <button >
          time
        </button>
      </div>
    );
  }
}
export default ShopView;

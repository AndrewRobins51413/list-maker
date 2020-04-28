import React from 'react';
// import DateTimePicker from 'react-datetime-picker';
// import GradeTable from './grade-table';

class ShopView extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      grocery: '',
      acquired: false,
      reason: ''
    };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    const { name, value, type, checked } = event.target;
    type === 'checkbox' ? this.setState({ [name]: checked })
      : this.setState({ [name]: value });
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
    const titleStyle = {
      color: 'darkgreen',
      fontStyle: 'italic'
    };
    return (
      <div className="container-fluid d-flex px-5  border border-info">
        <main>
          <form className="table table-success mt-4">
            <h4 className="row px-5" style={titleStyle}> Shopview </h4>
            <div className="row px-5">
              <label>
                <input
                  className="ml-10"
                  type="checkbox"
                  name="acquired"
                  // value = "doNotHave"
                  onChange={this.handleChange}
                  checked={this.state.acquired}
                /> Not acquired?
              </label>

              <input
                name="grocery"
                value={this.state.grocery}
                onChange={this.handleChange}
                placeholder="Grocery"
                className="ml-3"
              />
              <br />
            </div>
            <br />
            <div className=" px-5">
              <select
                value={this.state.reason}
                name="reason"
                onChange={this.handleChange}
                className="mb-4"
              >
                <option value=""> Please choose a reason for non-acquisition</option>
                <option value="out of stock"> Out of Stock</option>
                <option value="over priced">Too Expensive</option>
                <option value="wrong size">Wrong Size</option>
              </select>

              <br />
              <button className="ml-5 mb-4">Submit</button>
            </div>
          </form>
          <div>________________________________________________________________________</div>
          <div>
            <hr />
            <div className="border border-info px-5 table table-success">
              <h4 style={titleStyle}>You have entered:</h4>
              <p>Item Name: {this.state.grocery}</p>
              <p>Acquisition status: {this.state.acquired ? 'Yes' : 'No'}</p>
              <p>Reason for non-acqisition: {this.state.reason}</p>
            </div>
          </div>
        </main>
      </div>
    );
  }
}
export default ShopView;

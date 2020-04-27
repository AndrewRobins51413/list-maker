import React from 'react';
// import GradeTable from './grade-table';

class ShopView extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      grocery: '',
      acquired: true,
      reason: ''
    };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    const { name, value, type, checked } = event.target;
    type === 'checkbox' ? this.setState({ [name]: checked })
      : this.setState({ [name]: value });
  }

  render() {

    return (
      <div className="container-fluid border border-info">
        <main>
          <form>
            <h1> Shopview </h1>

            <input
              name="grocery"
              value= {this.state.grocery}
              onChange= {this.handleChange}
              placeholder = "Grocery"
            />

            <br />

            <label>
              <input
                type = "checkbox"
                name = "notAcquired"
                // value = "doNotHave"
                onChange={this.handleChange}
                checked={this.state.acquired}
              /> Not acquired?
            </label>

            {/* <label>
              <input
                type="radio"
                name="acquired"
                value="doHave"
                checked={this.state.acquired === false}
                onChange={this.handleChange}
              /> Acquired?
            </label> */}

            <br />

            <select
              value = {this.state.reason}
              name = "reasons"
              onChange = {this.handleChange}
            >
              <option value=""> Please choose a reason for non-acquisition</option>
              <option value="out of stock"> Out of Stock</option>
              <option value="over priced">Too Expensive</option>
              <option value="wrong size">Wrong Size</option>
            </select>

            <br />
            <button >Submit</button>
          </form>
          <div>_____________________________________________________</div>

          <hr />
          <h2>You have entered:</h2>
          <p>Item Name: {this.state.grocery}</p>
          <p>Acquisition status: {this.state.acquired}</p>
          <p>Reason for non-acqisition: {this.state.reason}</p>
        </main>
      </div>
    );
  }
}
export default ShopView;

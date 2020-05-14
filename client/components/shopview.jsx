import React from 'react';
// import DateTimePicker from 'react-datetime-picker';
// import GradeTable from './grade-table';

class ShopView extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      grocery: '',
      acquired: false,
      reason: '',
      notes: 'testing'
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleReason = this.handleReason.bind(this);
    this.handleOnClick = this.handleOnClick.bind(this);
  }

  handleChange(event) {
    const { name, value, type, checked } = event.target;
    type === 'checkbox' ? this.setState({ [name]: checked })
      : this.setState({ [name]: value });
  }

  addANote(newNote) {
    const configNote = {
      method: 'POST',
      body: JSON.stringify(newNote),
      headers: {
        'Content-Type': 'application/json'
      }
    };
    fetch('/api/notes', configNote)
      .then(response => {
        return response.json();
      })
      .then(newNoteData => {
        this.setState(state => ({
          notes: state.notes.concat(newNoteData)
        }));
      })
      .catch(err => {
        return `There was an error: ${err}`;
      });
  }

  handleReason(event) {
    event.preventDefault();
    this.setState({ reason: event.target.value });
  }

  handleOnClick(event) {
    event.preventDefault();
    this.addANote(this.state);
  }

  render() {

    const titleStyle = {
      color: 'darkgreen',
      fontStyle: 'italic'
    };

    const groceryList = this.state.grocery;
    console.log('grocery', groceryList);

    const reason = this.state.reason;
    console.log('reason', reason);

    return (
      <div className="border border-info">
        <form className="table table-success mt-4">
          <h4 className="row px-5" style={titleStyle}> NopeView </h4>
          <div className="row px-5">
            <label>
              {/* <input
                className="ml-10"
                type="checkbox"
                name="acquired"
                // value = "doNotHave"
                onChange={this.handleChange}
                checked={this.state.acquired}
              /> Not acquired? */}
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

          <div className="form-row">
            <div className="form-group col-md-8">
              <div className=" px-5">
                <select
                  value={this.state.reason}
                  name="reason"
                  onChange={this.handleChange, this.handleReason}
                  className="mb-4"
                >
                  <option value=""> Please choose a reason for non-acquisition</option>
                  <option value="out of stock"> Out of Stock</option>
                  <option value="over priced">Too Expensive</option>
                  <option value="wrong size">Wrong Size</option>
                </select>

                <br />
                <button type="submit" onClick={this.handleOnClick} className="ml-5 mb-4">Submit</button>
              </div>
            </div>
          </div>

        </form>

        <div>
          <hr />
          <div className="border border-info px-5 table table-success">
            <h4 style={titleStyle}>You have entered</h4>
            <p>Item Name: {this.state.grocery}</p>
            <p>Acquisition status: {this.state.acquired ? 'Not Purchased' : 'Purchased'}</p>
            <p>Reason for non-acqisition: {this.state.reason}</p>
          </div>
        </div>
      </div>
    );
  }
}
export default ShopView;

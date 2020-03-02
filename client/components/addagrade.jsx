import React from 'react';

export default class Student extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: ' ',
      course: ' ',
      grade: ' '
    };
    this.handleChange = this.handleChange.bind(this);
    // this.handleAddCourse = this.handleAddCourse.bind(this);
    // this.handleAddGrade = this.handleAddGrade.bind(this);
    // this.handleAddId = this.handleAddId.bind(this);
    // this.handleCancel = this.handleCancel.bind(this);
  }

  handleChange(event) {
    this.setState({ [event.target.name]: event.target.value }
    );
  }

  // handleCancel(event) {
  //   this.setState({
  //     cancel: event.target.value
  //   });
  // }

  render() {
    return (
      <div className="col-8">
        <form onSubmit={this.addAGrade} onReset={this.handleCancel}>
          <div className="form-row">
            <div className="form-group col-md-8">
              <label htmlFor="inputName"></label>
              <input onChange={this.handleChange} type="text" name="name" value={this.state.name}
                className="form-control" placeholder="Name" id="inputName"></input>
            </div>
          </div>
          <div className="form-row">
            <div className="form-group col-md-8">
              <label htmlFor="inputCourse"></label>
              <input onChange={this.handleChange} type="text" name="course" value={this.state.course}
                className="form-control" placeholder="Course" id="inputCourse"></input>
            </div>
          </div>
          <div className="form-row">
            <div className="form-group col-md-8">
              <label htmlFor="inputGrade"></label>
              <input onChange={this.handleChange} type="text" name="grade" value={this.state.grade}
                className="form-control" placeholder="Grade" id="inputGrade"></input>
            </div>
          </div>
          <button type="submit" onClick={this.handleChange} className="btn btn-primary mb-2">Submit</button>
          <button type="reset" onClick={this.handleCancel} className="btn btn-primary mb-2">Reset</button>
          {/* <tbody>{this.props.state}</tbody> */}
        </form>
      </div>
    );
  }
}

// handleAddCourse(event) {
//   this.setState({
//     course: event.target.value
//   });
// }

// handleAddGrade(event) {
//   this.setState({
//     grade: event.target.value
//   });
// }

// handleAddId(event) {
//   this.setState({
//     id: event.target.value  //onChange=handleChange({
//       //this.setState
//     })
//   });
// }

// handleAdd(event) {
//   this.setState({
//     this.props.fetchNewGrade(this.state)
//   this.handleCancel
//   })
// }

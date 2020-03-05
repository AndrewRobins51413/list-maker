import React from 'react';

export default class Student extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: ' ',
      course: ' ',
      grade: ' '
    };
    this.handleOnClick = this.handleOnClick.bind(this);
    this.handleChangeName = this.handleChangeName.bind(this);
    this.handleAddGrade = this.handleAddGrade.bind(this);
    this.handleAddCourse = this.handleAddCourse.bind(this);
    // this.handleCancel = this.handleCancel.bind(this);
  }

  handleChangeName(event) {
    event.preventDefault();
    this.setState({ name: event.target.value }
    );
  }

  handleAddCourse(event) {
    event.preventDefault();
    this.setState({ course: event.target.value }
    );
  }

  handleAddGrade(event) {
    this.setState({ grade: event.target.value }
    );
  }

  // handleCancel(event) {
  //   this.setState({
  //     cancel: event.target.value
  //   });
  // }
  handleOnClick(event) {
    event.preventDefault();
    this.props.addAGrade(this.state);
  }

  render() {
    return (
      <div className="col-10">
        <form onSubmit={this.addAGrade} onCancel={this.handleCancel}>
          <div className="form-row">
            <div className="form-group col-md-8">
              <label htmlFor="inputName"></label>
              <input onChange={this.handleChangeName} type="text" name="name" value={this.state.name}
                className="form-control" placeholder="Name" id="inputName"></input>
            </div>
          </div>
          <div className="form-row">
            <div className="form-group col-md-8">
              <label htmlFor="inputCourse"></label>
              <input onChange={this.handleAddCourse} type="text" name="course" value={this.state.course}
                className="form-control" placeholder="Course" id="inputCourse"></input>
            </div>
          </div>
          <div className="form-row">
            <div className="form-group col-md-8">
              <label htmlFor="inputGrade"></label>
              <input onChange={this.handleAddGrade} type="text" name="grade" value={this.state.grade}
                className="form-control" placeholder="Grade" id="inputGrade"></input>
            </div>
          </div>
          <button type="submit" onClick={this.handleOnClick} className="btn btn-primary mb-2 ">Submit</button>
          <button type="cancel" onClick={this.handleCancel} className="btn btn-primary mb-2">Reset</button>

        </form>
      </div>
    );
  }
}

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

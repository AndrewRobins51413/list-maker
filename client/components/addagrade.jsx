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

  handleOnClick(event) {
    event.preventDefault();
    this.props.addAGrade(this.state);
  }

  render() {
    return (
      <div className="col-12 col-md-8 col-sm-8 ">
        <form onSubmit={this.addAGrade} onCancel={this.handleCancel}>
          <div className="form-row">
            <div className="form-group col-md-8">
              <label htmlFor="inputName">Grocery Item</label>
              <input onChange={this.handleChangeName} type="text" name="name" value={this.state.name}
                className="form-control" placeholder="Name" id="inputName"></input>
            </div>
          </div>
          <div className="form-row">
            <div className="form-group col-md-8">
              <label htmlFor="inputCourse">Notes</label>
              <input onChange={this.handleAddCourse} type="text" name="course" value={this.state.course}
                className="form-control" placeholder="Course" id="inputCourse"></input>
            </div>
          </div>
          <div className="form-row">
            <div className="form-group col-md-8">
              <label htmlFor="inputGrade">How Many?</label>
              <input onChange={this.handleAddGrade} type="text" name="grade" value={this.state.grade}
                className="form-control" placeholder="Grade" id="inputGrade"></input>
            </div>
          </div>
          <div className="row">
            <button type="submit" onClick={this.handleOnClick} className="btn btn-primary btn-success  mb-2 ">Submit</button>
            <div></div>
            <button type="cancel" onClick={this.handleCancel} className="btn btn-primary btn-danger ml-1 mb-2">Reset</button>
          </div>
        </form>
      </div>
    );
  }
}

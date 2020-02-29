import React from 'react';

export default class Student extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: " ",
      course: " ",
      grade: " "
    }
    this.handleAddName = this.handleAddName.bind(this);
    this.handleAddCourse = this.handleAddCourse.bind(this);
    this.handleAddGrade = this.handleAddGrade.bind(this);
    this.handleAddId = this.handleAddId.bind(this);
    this.handleCancel = this.handleCancel.bind(this);
  }

  handleAddName(event) {
    this.setState({
      name: event.target.value
    });
  }
  handleAddCourse(event) {
    this.setState({
      course: event.target.value
    });
  }
  handleAddGrade(event) {
    this.setState({
      grade: event.target.value
    });
  }
  handleAddId(event) {
    this.setState({
      id: event.target.value
    });
  }
  // handleAdd(event) {
  //   this.setState({
  //     this.props.fetchNewGrade(this.state)
  //   this.handleCancel
  //   })
  // }
  handleCancel(event) {
    this.setState({
      cancel: event.target.value
    });
  // }

  render() {
    return (
            <div className="col-3">
              <form onSubmit={this.handleAdd} onReset={this.handleCancel}>
                <div className="form-row">Add Here
                  <div className="form-group col-md-8">
                    <label htmlFor="inputName"></label>
                    <input type="text" className="form-control" placeholder="Name" id="inputName"></input>
                  </div>
                </div>
                <div className="form-row">
                  <div className="form-group col-md-8">
                    <label htmlFor="inputCourse"></label>
                    <input type="text" className="form-control" placeholder="Course" id="inputCourse"></input>
                  </div>
                </div>
                <div className="form-row">
                  <div className="form-group col-md-8">
                    <label htmlFor="inputGrade"></label>
                    <input type="text" className="form-control" placeholder="Grade" id="inputGrade"></input>
                  </div>
                </div>
                <button type="submit" onClick={this.handleAddGrade(click)} className="btn btn-primary mb-2">Submit</button>
                <button type="reset" onClick={this.handleCancel} className="btn btn-primary mb-2">Reset</button>
              </form>
            </div>
    );
  }
}

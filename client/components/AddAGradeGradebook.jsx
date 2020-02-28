import React from 'react';

class AddAStudent extends React.Component {
  constructor(props) {
    super(props);
    this.state {
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

  handleCancel(event) {
    this.setState({
      cancel: event.target.value
    });
  }

  render() {
    return (
      < div id="root" >
        <div className="container">
          <div className="row justify-content-between">
            <h2>Student Grade Book <span className="badge "></span></h2>
            <h3><span className=" badge badge-secondary ">Average = {gradeVariable}%</span></h3>
          </div>
        </div>
        <div className="container">
          <div className="row">
            <table className="table table-striped col-8">
              <thead className="thead-light">
                <tr>
                  <th className="col-4">Name</th>
                  <th className="col-2">grade</th>
                  <th className="col-2">course</th>
                </tr>
              </thead>
              <tbody>{gradeMap}</tbody>
            </table>

            <div className="col-3">
              <form>
                <div className="form-row">Add New Student Here
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
                <button type="submit" onClick={} className="btn btn-primary mb-2">Submit</button>
              </form>
            </div>
          </div>
        </div>
      </div >
    );
  }
}

export default AddAStudent;

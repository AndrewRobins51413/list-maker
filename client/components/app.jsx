import React from 'react';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
    this.state = { // the grades object assign an array of empty is equal to the state method on 'this' object
      grades: []
    };
  }

  componentDidMount() {
    this.getAllGrades(); // following model from fetch-practice
  }

  handleChange() {

  }

  getAllGrades() {
    fetch('/api/grades')
      .then(response =>
        response.json()
      )
      .then(gradeJson => {
        this.setState({ grades: gradeJson });
      })
      .catch(err => {
        return `There was an error: ${err}`;
      });
  }

  getAverageGrade() {
    var sumGrade = 0;
    var pushGrade = [];
    if (this.state.grades.length === 0) {
      return 'not applicable';
    }
    var gradeCumulative = null;

    for (var i = 0; i <= this.state.grades.length - 1; i++) {
      gradeCumulative = this.state.grades[i].grade;
      pushGrade.push(gradeCumulative);
    }

    for (var j = 0; j <= pushGrade.length - 1; j++) {
      sumGrade = sumGrade + pushGrade[j];
    }
    var avgGrade = sumGrade / pushGrade.length;
    console.log('this.state.grades', this.state.grades);
    return avgGrade;
  }

  addAGrade(newGrade) {
    const newGradeToSend = JSON.stringify(newGrade);
    const config = {
      method: 'POST',
      body: newGradeToSend,
      headers: {
        'Content-Type': 'application/json'
      }
    };
    fetch('/api/grades')
      .then(response => {
        return response.json();
      })
      .then(newGradeData => {
        const currentNewGrade = [...this.state.grades];
        currentNewGrade.push(todoData);
        this.setState({ grades: currentNewGrade });
      })
      .catch(err => {
        return `There was an error: ${err}`;
      });
  }

  render() {
    const gradeVariable = this.getAverageGrade();
    const gradeMap = this.state.grades.map(grade => {

      return (
        <tr key={grade.id}>
          <td> {grade.name} </td>
          <td>{grade.grade}</td>
          <td> {grade.course} </td>
        </tr>
      );
    });
    return (
      < div id="root" >
        <div className="container">
          <div className="row justify-content-between">
            <h2>Student Grade Book <span className="badge "></span></h2>
            <h3><span className=" badge badge-secondary ">Average = {gradeVariable}%</span></h3>
          </div>
        </div>
        <div className="container">
          <table className="table table-striped col-8">

            <thead className="thead-light">

              <tr>
                <th className="col-4">Name</th>
                <th className="col-2">grade</th>
                <th className="col-2">course</th>
              </tr>
            </thead>
            {gradeMap}
          </table>
          <div className="col-4">
            <form onSubmit={this.handleSubmit} className="form-inline">
              <div className="form-group mb-2">
                <label>Student Info</label>
              </div>
            </form>
          </div>
        </div>
      </div >
    );
  }
}

export default App;

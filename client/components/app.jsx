import React from 'react';
import Student from './addagrade';
import GradeTable from './grade-table';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      grades: []
    };
    this.addAGrade = this.addAGrade.bind(this);
    this.deleteGrade = this.deleteGrade.bind(this);
  }

  componentDidMount() {
    this.getAllGrades(); // following model from fetch-practice
  }

  getAllGrades() {
    fetch('/api/grades')
      .then(response => {
        return response.json();
      })
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
      var gradeCumulative2 = parseFloat(gradeCumulative);
      pushGrade.push(gradeCumulative2);
    }

    for (var j = 0; j <= pushGrade.length - 1; j++) {
      sumGrade = sumGrade + pushGrade[j];
    }
    var avgGrade = sumGrade / pushGrade.length;
    var fixedGrade = avgGrade.toFixed(2);
    return fixedGrade;
  }

  addAGrade(newGrade) {
    const config = {
      method: 'POST',
      body: JSON.stringify(newGrade),
      headers: {
        'Content-Type': 'application/json'
      }
    };
    fetch('/api/grades', config)
      .then(response => {
        return response.json();
      })

      .then(newGradeData => { // Inspiration from Sebastian's code
        this.setState(state => ({
          grades: state.grades.concat(newGradeData)
        }));
      })
      .catch(err => {
        return `There was an error: ${err}`;
      });
  }

  deleteGrade(idToDelete) {
    fetch(`/api/grades/${idToDelete}`, {
      method: 'DELETE'
    })
      .then(() => {
        this.setState(previousState => {
          const newObjects = previousState.grades.filter(grade => grade.id !== idToDelete);
          return { grades: newObjects };
        });
      });
  }

  render() {
    // const gradeVariable = this.getAverageGrade();
    const gradeMap = this.state.grades.map(grade => {
      return (
        <tr key={grade.id}>
          <td> {grade.name} </td>
          <td>{grade.grade}</td>
          <td> {grade.course} </td>
          <td><button type='delete' className='btn-warning'
            onClick={() => this.deleteGrade(grade.id)}>Got It!
          </button></td>
        </tr>
      );
    });
    return (
      <div className="container border border-info">
        <div className="row px-md-5 justify-content-between">
          <h2>Grocery List<span className=" badge col-6 "></span></h2>
          {/* <h3><span className=" badge badge-secondary ">Average = {gradeVariable}%</span></h3> */}
        </div>
        <div className="row">
          <div className="col-8">
            <GradeTable deleteGrade={this.deleteGrade} grades={gradeMap} />
          </div>
          <div className="col-4">
            <Student addAGrade={this.addAGrade} newStudent={this.state.grades} />
            {/* line above add            de to the Student class. */}
          </div>
        </div>
      </div>
    );
  }
}

export default App;

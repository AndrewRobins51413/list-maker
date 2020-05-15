import React from 'react';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from 'react-router-dom';
import Student from './addagrade';
import GradeTable from './grade-table';
import ShopView from './shopview';
import HomeView from './homeview';
import Header from './header';

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
    this.getAllGrades();
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
  // Below is the function for getting an avarge grade from when this was a
  // gradebook app.
  // getAverageGrade() {
  //   var sumGrade = 0;
  //   var pushGrade = [];
  //   if (this.state.grades.length === 0) {
  //     return 'not applicable';
  //   }
  //   var gradeCumulative = null;

  //   for (var i = 0; i <= this.state.grades.length - 1; i++) {
  //     gradeCumulative = this.state.grades[i].grade;
  //     var gradeCumulative2 = parseFloat(gradeCumulative);
  //     pushGrade.push(gradeCumulative2);
  //   }

  //   for (var j = 0; j <= pushGrade.length - 1; j++) {
  //     sumGrade = sumGrade + pushGrade[j];
  //   }
  //   var avgGrade = sumGrade / pushGrade.length;
  //   var fixedGrade = avgGrade.toFixed(2);
  //   return fixedGrade;
  // }

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

      .then(newGradeData => {
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

    const gradeMap = this.state.grades.map(grade => {
      return (
        <tr key={grade.id}>
          <td> {grade.name} </td>
          <td>{grade.grade}</td>
          <td> {grade.course} </td>
          <td><button type='delete' className='btn-warning'
            onClick={() => this.deleteGrade(grade.id)}>GotIt!
          </button></td>
        </tr>
      );
    });
    const titleStyle = {
      color: 'darkgreen',
      fontStyle: 'italic'
    };
    return (
      <>
        <div>
          <Header />
        </div>
        <div className="container-fluid border border-info toptitle">
          <div className="row px-5 justify-content-between">
            <h4 style={titleStyle}>Grocery List</h4>
          </div>
          <div className="row d-flex">
            <div className=" col-sm">
              <GradeTable deleteGrade={this.deleteGrade} grades={gradeMap} />
            </div>
            <div className="col-sm">
              <Student addAGrade={this.addAGrade} newStudent={this.state.grades} />
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default App;

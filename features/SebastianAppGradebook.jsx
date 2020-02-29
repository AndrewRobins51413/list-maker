import React from 'react';
import Header from './header';
import GradeTable from './grade-table';
import AddGrade from './add-grade';
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      grades: [],
      averageGrade: null,
      gradeToUpdate: null
    };
    this.addNewGrade = this.addNewGrade.bind(this);
    this.deleteGrade = this.deleteGrade.bind(this);
  }

  componentDidMount() {
    this.getGrades();
  }

  getGrades() {
    fetch('api/grades')
      .then(response => {
        return response.json();
      })
      .then(state => {
        this.setState({
          grades: state
        });
      });
  }

  gradeAverage() {
    const studentObject = this.state.grades;
    const gradesArr = [];
    let sumOfGrades = 0;
    let gradeAverage = 0;
    for (const index in studentObject) {
      gradesArr.push(studentObject[index].grade);
      sumOfGrades += studentObject[index].grade;
      gradeAverage = sumOfGrades / gradesArr.length;
    }
    return gradeAverage.toFixed(0);
  }

  addNewGrade(newGradeData) {
    fetch('api/grades', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(newGradeData)
    })
      .then(response => {
        return response.json();
      })
      .then(newGrade => {
        this.setState(state => ({
          grades: state.grades.concat(newGrade)
        }));
      });
  }

  deleteGrade(gradeToDeleteId, gradeObjectToDelete) {
    fetch(`api/grades/${gradeToDeleteId}`, {
      method: 'DELETE'
    })
      .then(() => {
        this.setState(previousState => {
          const newObjects = previousState.grades.filter(grade => grade.id !== gradeObjectToDelete.id);
          return { grades: newObjects };
        });
      });
  }

  // updateGrade(gradeToUpdateId) {
  //   const gradeArray = [...this.state.grades];
  //   const arrayToUpdateIndex = gradeArray.findIndex(gradeArray => gradeArray.id === gradeArray);
  // }
  render() {
    return (
      <div className="col">
        <div className="col-sm-12 col-md-10 col-lg-8 d-flex container w-95 align-items-center py-4">
          <Header
            text="Student Grade Table"
            averageGrade={this.gradeAverage()}
          />
        </div>
        <div className="container w-95">
          <div className="row align-items-top">
            <div className="col-sm-12 col-md-8 col-lg-9">
              <GradeTable grades={this.state.grades} deleteGrade={this.deleteGrade} updateGrade={this.updateGrade} />
            </div>
            <div className="col-sm-12 col-md-4 col-lg-3">
              <AddGrade appRender={this.render} fetchNewGrade={this.addNewGrade} grades={this.state.grades} />
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default App;

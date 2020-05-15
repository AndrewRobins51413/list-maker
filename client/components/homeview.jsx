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

class HomeView extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      grades: [],
      home: ''
    };
    this.addAGrade = this.addAGrade.bind(this);
    this.deleteAGrade = this.deleteAGrade.bind(this);
    this.itemNotFound = this.itemNotFound.bind(this);
  }

  componentDidMount() {
    this.getAllGrades();
    console.log('mounted');
    console.log(this.state);

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
    console.log(this.state);
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

      .then(newGradeData => {
        this.setState(state => ({
          grades: state.grades.concat(newGradeData)
        }));
      })
      .catch(err => {
        return `There was an error: ${err}`;
      });
  }

  deleteAGrade(idToDelete) {
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

  itemNotFound(notFound) {
    const config = {
      method: 'POST',
      body: JSON.stringify(notFound),
      headers: {
        'Content-Type': 'application/json'
      }
    };
    fetch('/api/grades', config)
      .then(response => {
        return response.json();
      })

      .then(notFoundData => {
        this.setState(state => ({
          grades: state.grades.concat(notFoundData)
        }));
      })
      .catch(err => {
        return `There was an error: ${err}`;
      });
    console.log(this.state);
  }

  render() {
    const titleStyle = {
      color: 'darkgreen',
      fontStyle: 'italic'
    };

    const gradeMap = this.state.grades.map(grade => {
      return (
        <tr key={grade.id}>
          <td> {grade.name} </td>
          <td>{grade.grade}</td>
          <td> {grade.course} </td>
          <td><button type='delete' className='btn btn-warning'
            onClick={() => this.deleteAGrade(grade.id)}>Yes!
          </button></td>
          <td><button type='button' className='btn btn-light' data-toggle='modal' data-target='#notFoundModal'
            onClick={() => this.itemNotFound(grade.id)}>Nope!
          </button></td>
        </tr>
      );
    });

    return (
      <div className=" container-fluid m-1 table table-responsive">
        <div className= "row m-1 " >
          <div>
            <h4 style={titleStyle}>HomeView</h4>
            <div className= "border border-info table table-responsive">
              <div className='mr-3'>
                <GradeTable deleteGrade={this.deleteGrade} grades={gradeMap} className="border border-danger"/>
              </div>
              <div className="row mx-3">
                <Student addAGrade={this.addAGrade} newStudent={this.state.grades} className="border border-danger"/>
              </div>

            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default HomeView;

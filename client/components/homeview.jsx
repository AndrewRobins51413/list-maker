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
      home: ''
    };
    this.addAGrade = this.addAGrade.bind(this);
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
    console.log(this.state);
  }

  addAGrade(newGrade) {
    const config = {
      method: postMessage,
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
        this.setState(state => ({ grades: state.grades.concat(newGradeData) }));
      })
      .catch(err => {
        return `There was an error: ${err}`;
      });
  }

  render() {
    return (
      <div>
        <h2>HomeView2</h2>
        <button>Push</button>
        <div>
          <GradeTable />
          <Student />
        </div>
      </div>
    );
  }
}
export default HomeView;

import React from 'react';

class HomeView extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      home: ''
    };
  }

  render() {
    return (
      <h2>HomeView</h2>
    );
  }
}
export default HomeView;

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
      <div>
        <h2>HomeView2</h2>
        <button>Push</button>
      </div>
    );
  }
}
export default HomeView;

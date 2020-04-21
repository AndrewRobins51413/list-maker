import React from 'react';
// import GradeTable from './grade-table';

class ShopView extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      view: ''
    };
    this.shopView = this.shopView.bind(this);
  }

  render() {

    return (
      <h1> Shopview </h1>
    );
  }
}
export default ShopView;

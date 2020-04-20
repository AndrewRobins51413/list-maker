import React from 'react';
// import GradeTable from './grade-table';

class ShopView extends React.Component {
  // constructor(props) {
  //   super(props);
  //   this.state = {
  //     view: ''
  //   };
  //   this.shopView = this.shopView.bind(this);
  // }

  render() {

    return (
      <>
      console.log('hello')

        <div>
          <tr>
            <th>Item</th>
            <th>Quantity</th>
            <th>Note</th>
            <th>Got It?</th>
          </tr>
        </div>
      </>
    );
  }
}
export default ShopView;

import React from 'react';

export default class ItemDetail extends React.Component {


  render() {
    const item = this.props.item;

    return (
      <ul>
        <li>{item.name}</li>
        <li>{item.happiness}</li>
        <li>{item.price}</li>
      </ul>
    );
  }
}

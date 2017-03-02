import React from 'react';

var FoodFilter = React.createClass({
  // return a list of JSX elememnts.
  foodList: function () {
    return this.props.data.items.map(function (item) {
      return <li>{item.name} ({item.type})</li>
    })
  },
  // filter for only the mexican foods.
  filteredFoodList: function () {
    return this.props.data.items.filter(function (item) {
      return item.type === 'mexican';
    }).map(function (item) {
      return <li>{item.name} ({item.type})</li>
    });
  },
  render: function() {
    return (
      <div>
        <h1>Welcome to {this.props.data.title}</h1>
        <h3>{this.props.data.phone}</h3>
        <ul>
          {this.foodList()}
        </ul>
        <ul>
          {this.filteredFoodList()}
        </ul>
      </div>
    );
  }
})

export default FoodFilter;

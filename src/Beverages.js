import React from 'react';
import { Jumbotron } from 'react-bootstrap';

var Home = function (props) {
  return (
    <div>
      <Jumbotron>
        <h1>{props.title}</h1>
        <h3>of {props.year}</h3>
        <h3>we have {props.number} </h3>
      </Jumbotron>
    </div>
  );
}

var App = React.createClass({
  getInitialState: function () {
    return (
      {
        filterVal: null
      }
    )
  },
  onChangeHandler: function (value) {
    console.log(value);
    this.setState({filterVal: value});
  },
  filteredBevs: function () {
    var self = this;
    return this.props.beverages.filter(function (item) {
      if (self.state.filterVal === null || self.state.filterVal === 'all') return true;
      return item.category === self.state.filterVal;
    });
  },
  render: function () {
    return (
      <div>
        <Home title={"Look at all these Beverages"} year={2017} number={this.props.beverages.length} />
        <BeverageList onChangeHandler={this.onChangeHandler} beverages={this.filteredBevs()} />
      </div>
    )
  }
});

var BeverageList = function (props) {
  var bevList = props.beverages.map(function (item) {
    return (<li>{item.name} {item.price}</li>);
  })
  return (
    <div>
      <h2>All the Beverages.  There are {props.beverages.length}</h2>
      <ul>
        {bevList}
      </ul>
      <form>
        <select onChange={(event) => props.onChangeHandler(event.target.value)} >
          <option name="sports drink">sports drink</option>
          <option name="caffeinated">caffeinated</option>
          <option name="alcoholic">alcoholic</option>
          <option name="juice">juice</option>
          <option>all</option>
        </select>
      </form>
    </div>
  )
}

export default App;

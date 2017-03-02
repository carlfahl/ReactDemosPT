import React from 'react';
import numbers from './data/numbers';

// createClass takes an JS object where the values are functions.
var NumberMapsAndFilters = React.createClass({
  // Function that sets up state.  getInitialState is a special
  // React function.  Like a constructor.  Always return a javascript
  // object.
  getInitialState: function () {
    return (
      {
        filternum: null
      }
    )
  },
  // Make a function to handle changes in a form.  setState is a
  // special react function that resets the state variables.  takes
  // an object as parameter.
  onChangeHandler: function (value) {
    this.setState({filternum: value});
  },
  // Now filter by the state variable.
  render: function() {
    // inside the filter callback function this is out of scope.
    // So we have to store it in another variable.
    var self = this;
    var newNumbers = numbers.filter(function (item) {
      return item > self.state.filternum;
    }).map(function (item) {
      return (<li>{item}</li>)
    });
    // use the onChangeHandler function as a prop to the input field.
    return (
      <div>
        <h1>Hello, Number mapping and filtering!!</h1>
        <input type="text" onChange={(event) => this.onChangeHandler(event.target.value)} />
        <ul>
          {newNumbers}
        </ul>
      </div>
    )
  }
})

export default NumberMapsAndFilters;

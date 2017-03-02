import React from 'react';

// Stateless component - only for display
function ListItem (props) {
  return (
    <li>{props.name}</li>
  );
}

// Stateful component
var HelloWorld = React.createClass({
  makeList: function () {
    var nameList = this.props.names.map(function (item) {
      return (<ListItem name={item} />);
    });
    return nameList;
  },
  render: function() {
    return (
      <div>
        <ul>
          {this.makeList()}
        </ul>
      </div>
    )
  }
})

export default HelloWorld;

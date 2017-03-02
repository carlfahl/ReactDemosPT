import React from 'react';

var ContentToggler = React.createClass({
  getInitialState: function () {
    return (
      {
        // Do we show the contents of the toggler
        showDetails: true
      }
    )
  },
  // toggle the showDetails state.
  toggleDetails: function () {
    this.setState({showDetails: !this.state.showDetails});
  },
  renderDetails: function () {
    // if showDetails is true render the children of this comp.
    // which is the paragraph.
    if (this.state.showDetails) {
      // the props.children is what is inside the
      // ContentToggler element.
      return this.props.children;
    } else {
      return null;
    }
  },
  render: function () {
    return (
      <div>
        <h2>Toggler</h2>
        <button onClick={() => this.toggleDetails()} >Toggle</button>
        {this.renderDetails()}
      </div>
    );
  }
});

var Toggler = React.createClass({
  render: function() {
    return (
      <div>
        <h1>Someday, I am going to grow up to be a toggler.</h1>
        <ContentToggler>
          <p>This is the content that is toggled.</p>
        </ContentToggler>
      </div>
    )
  }
});

export default Toggler;

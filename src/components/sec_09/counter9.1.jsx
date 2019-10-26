import React, { Component } from "react";

class Counter extends Component {
  state = {
    count: 1,
    // tags: ["tag1", "tag2", "tag3"]
    tags: []
  };

  // CONDITIONAL RENDERING
  // in the "tags" array has no elements, we display that msg, otherwise we render the list
  // i.e. depending on our state, we will return a message or a list
  render() {
    return <React.Fragment>{this.renderTags()}</React.Fragment>;
  }

  renderTags() {
    if (this.state.tags.length === 0) return <p>There are no tags!</p>; // we are returning a JXS expression
    // if(this.state.tags.length === 0) return 'There are no tags!'  -- returns the plain text
    // if(this.state.tags.length === 0) return null -- Returns nothing! We do not want to display anything

    return (
      <ul>
        {this.state.tags.map(tag => (
          <li key={tag}> {tag}</li>
        ))}
      </ul>
    );
  }
}

export default Counter;

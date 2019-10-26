import React, { Component } from "react";

class Counter extends Component {
  state = {
    count: 1,
    tags: ["tag1", "tag2", "tag3"]
    //tags: []
  };

  // CONDITIONAL RENDERING
  // The message "Please create a new tag" is rendered only the array is empty
  // "this.state.tags.length === 0" returns true/false
  // in JS you can apply the LOGICAL AND && between non-boolean values
  // Type in browser console
  //              true && 'Hi' -> this returns "Hi"
  // When a JS engine tries to evaluate the expression " true && 'Hi'
  // it looks at the first operant, in this case that's true, then it goes to the second operant
  // the second operant is not a boolean, its "Hi", its a string
  // so JS tries to convert it to "truthy" or "falsy"
  // A string that has at least one char is considered to be truthy
  // EXAMPLE 2:
  // true && 'Hi'  && 1
  // the JS engine goes to the third operant, i.e. a number
  // number 0 is consider falsy, any number but 0 is considered truthy
  // so the result of the expression is the last operant

  render() {
    return (
      <React.Fragment>
        {this.state.tags.length === 0 && "Please create a new tag!"}

        {this.renderTags()}
      </React.Fragment>
    );
  }

  renderTags() {
    if (this.state.tags.length > 0)
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

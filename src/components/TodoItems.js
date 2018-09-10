import React, { Component } from 'react';
import FlipMove from 'react-flip-move';

// Stateless Class component -- Uses JS class, but doesn't need to maintain data through state.
class TodoItems extends Component {
  delete(key) {
    this.props.delete(key);
  }

  render() {
    const { entries } = this.props;
    var listItems = entries.map(item => (
      <li onClick={() => this.delete(item.key)} key={item.key}>
        {item.text}
      </li>
    ));
    return (
      <ul className="theList">
        <FlipMove duration={250} easing="ease-out">
          {listItems}
        </FlipMove>
      </ul>
    );
  }
}

export default TodoItems;

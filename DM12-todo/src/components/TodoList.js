import React, { Component } from "react";
import "../styles/TodoList.css";

class TodoList extends Component {
  constructor(props) {
    super(props);

    this.state = {
      items: [],
      inputItem: ""
    };

    this.addItem = this.addItem.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.deleteItem = this.deleteItem.bind(this);
  }

  addItem(event) {}

  deleteItem() {}

  handleChange(event) {
    console.log(event.target.value);
    this.setState({ inputItem: event.target.value });
  }

  render() {
    return (
      <div className="todoListMain">
        <div className="title">Todo App</div>
        <div className="header">
          <form onSubmit={this.addItem}>
            <input
              type="text"
              value={this.state.inputItem}
              onChange={this.handleChange}
              placeholder="enter task"
            />
          </form>
        </div>
      </div>
    );
  }
}

export default TodoList;

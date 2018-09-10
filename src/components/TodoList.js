import React, { Component } from 'react';
import TodoItems from './TodoItems';
import Button from './Button';
import '../styles/TodoList.css';

// State based class component - Uses JS class and maintains data through state.
class TodoList extends Component {
  constructor(props) {
    super(props);

    this.state = {
      items: [],
      inputItem: ''
    };

    // Binding statements to handle the keyword 'this'.
    this.handleSubmit = this.handleSubmit.bind(this);
    this.deleteItem = this.deleteItem.bind(this);
  }

  // You can now use arrow functions to handle binding.
  handleChange = event => {
    console.log(event.target.value);
    this.setState({ inputItem: event.target.value });
  };

  // Handle form submission for adding todo item.
  handleSubmit(e) {
    console.log(this.state.inputItem);
    e.preventDefault();
    var itemArray = this.state.items.slice();
    if (this.state.inputItem) {
      itemArray.push({
        text: this.state.inputItem,
        key: Date.now()
      });
      this.setState({
        items: itemArray,
        inputItem: ''
      });
    }
    console.log(itemArray);
  }

  // Delete todo Item.
  deleteItem(key) {
    var filteredItems = this.state.items.filter(item => item.key !== key);
    this.setState({
      items: filteredItems
    });
  }

  render() {
    return (
      <div className="todoListMain">
        <div className="title">Todo App</div>
        <div className="header">
          <form onSubmit={this.handleSubmit}>
            <input
              type="text"
              value={this.state.inputItem}
              onChange={this.handleChange}
              placeholder="enter task"
            />
            <Button text="Add Item" />
          </form>
        </div>
        <TodoItems entries={this.state.items} delete={this.deleteItem} />
      </div>
    );
  }
}

export default TodoList;

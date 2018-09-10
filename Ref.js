// import React, { Component } from "react";
// import TodoItems from "./TodoItems";
// import "../styles/TodoList.css";

// class TodoList extends Component {
//   constructor(props) {
//     super(props);

//     this.state = {
//       items: []
//     };

//     this.addItem = this.addItem.bind(this);
//     this.deleteItem = this.deleteItem.bind(this);
//   }

//   // Add Items
//   addItem(e) {
//     console.log(this.inputElement);
//     e.preventDefault();
//     var itemArray = this.state.items;
//     if (this.inputElement.value !== "") {
//       itemArray.push({
//         text: this.inputElement.value,
//         key: Date.now()
//       });
//       this.setState({
//         items: itemArray
//       });
//       this.inputElement.value = "";
//     }
//     console.log(itemArray);
//   }

//   // Delete Items
//   deleteItem(key) {
//     var filteredItems = this.state.items.filter(item => item.key !== key);
//     this.setState({
//       items: filteredItems
//     });
//   }

//   render() {
//     return (
//       <div className="todoListMain">
//         <div className="title">Todo App</div>
//         <div className="header">
//           <form onSubmit={this.addItem}>
//             <input
//               ref={a => (this.inputElement = a)}
//               placeholder="enter task"
//             />
//             <button type="submit"> Add </button>
//           </form>
//         </div>
//         <TodoItems entries={this.state.items} delete={this.deleteItem} />
//       </div>
//     );
//   }
// }

// export default TodoList;

import React, { Component } from "react";
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);

    this.state={
      newItem:"",
      list: [] 
    }
  }
  updateInput(key, value) {
    //update react state
    this.setState({
        [key]: value
    })
}

addItem() {
    //create item with const
    const newItem = {
        id: 1 + Math.random(),
        value: this.state.newItem.slice()
    };
    //copy of current list of items
    const list = [...this.state.list];

    //add new item to list
    list.push(newItem);

    //update state with new list and reset new item input
    this.setState({
        list,newItem: ""
    })
}
    deleteItem(id) {
      const list = [...this.state.list];
      const updatedList = list.filter(item => item.id !== id);
      this.setState({list: updatedList});
    }

render() {
    return (
        <div className="form">
            <div> 
              <h1>Janky Todo List</h1>
                <input type="text" placeholder="Type something" value={this.state.newItem} onChange = {event => this.updateInput("newItem", event.target.value)}/>
                <button onClick = {() => this.addItem()}>Add</button>
                <ul>
                  {this.state.list.map(item => {
                    return (
                      <li key = {item.id}>
                        {item.value}
                        <button onClick = {() => this.deleteItem(item.id)}>X</button>
                        </li>
                    )
                  })}
                </ul>
            </div>
        </div>
    )
}
}

export default App;

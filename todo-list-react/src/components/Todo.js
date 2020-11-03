import React, { Component } from "react";
class Todo extends Component {
    constructor(props) {
        super(props);

        this.state = {
            newItem: "",
            list: []
        }
    }

    updateInput(key, value) {
        //update react state
        this.setState({
            
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
            list,
            newItem: ""
        })

    }

    render() {
        return (
            <div className="form">
                <div>
                    <input type="text" placeholder="Type something" value={this.state.newItem} onChange = {e => this.updateInput("newItem", e.target.value)}/>
                    <button onClick = {() => this.addItem()}></button>
                    <button></button>
                </div>
            </div>
        )
    }
}
        





export default Todo;
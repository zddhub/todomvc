import React, { Component } from 'react'

class TodoItem extends Component{
  render() {
    const todo = this.props.todo
    return (
      <div>
        <input type='checkbox'/>
        <label>{todo.title}</label>
        <input type='button'/>
      </div>
    )
  }
}

export default TodoItem

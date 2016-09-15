import React, { Component } from 'react'

class TodoItem extends Component{
  render() {
    const todo = this.props.todo
    return (
      <li>
        <div className='view'>
          <label className='todo'>{todo.title}</label>
          <button className='destory'/>
          <input type='checkbox' className='toggle'/>
        </div>
      </li>
    )
  }
}

export default TodoItem

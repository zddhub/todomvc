import React, { Component, PropTypes } from 'react'

class TodoItem extends Component{

  todoItem = (isCompleted, content) => {
    if (isCompleted) {
      return <label className='todo completed'>{content}</label>
    } else {
      return <label className='todo'>{content}</label>
    }
  }

  checkbox = (isCompleted) => {
    return isCompleted ? <input type='checkbox' checked className='toggle'/> :
      <input type='checkbox' className='toggle'/>
  }

  render() {
    const todo = this.props.todo
    return (
      <li>
        <div className='view'>
          {this.todoItem(todo.completed, todo.title)}
          <input type='checkbox' className='toggle' checked={todo.completed} onChange={() => this.props.completedTodo(todo.id)}/>
          <button className='destory' onClick={() => this.props.destory(todo.id)}/>
        </div>
      </li>
    )
  }
}

TodoItem.propTypes = {
  todo: PropTypes.object.isRequired,
  completedTodo: PropTypes.func.isRequired,
  destory: PropTypes.func.isRequired
}

export default TodoItem

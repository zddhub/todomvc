import React, { Component } from 'react'
import ToggleAll from './ToggleAll'
import TodoItem from './TodoItem'
import FilterTodo from './FilterTodo'

class MainSection extends Component {
  todoList = () => {
    return this.props.todos.map(todo => {
      return <TodoItem key={todo.id} todo={todo} />
    })
  }

  activeNumber = () => {
    return this.props.todos.filter((todo)=> {
      return todo.completed === false
    }).length
  }

  render() {
    return (
      <section className='main'>
        <ToggleAll />
        <ul className='todo-list'>
          {this.todoList()}
        </ul>
        <FilterTodo activeCount={this.activeNumber()} />
      </section>
    )
  }
}

export default MainSection

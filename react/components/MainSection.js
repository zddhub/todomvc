import React, { Component } from 'react'
import ToggleAll from './ToggleAll'
import TodoItem from './TodoItem'
import FilterTodo from './FilterTodo'

class MainSection extends Component {
  todoList = () => {
    return this.props.todos.map(todo => {
      return <TodoItem key={todo.id} todo={todo}
        completedTodo={this.props.completedTodo}
        destory={this.props.destory}/>
    })
  }

  activeNumber = () => {
    return this.props.todos.filter((todo)=> {
      return todo.completed === false
    }).length
  }

  filterTodo = () => {
    if (this.props.todos.length > 0)
      return <FilterTodo activeCount={this.activeNumber()} />
  }

  toggleAll = () => {
    if (this.props.todos.length > 0)
      return <ToggleAll toggleAllChange={this.props.toggleAllChange}/>
  }

  render() {
    return (
      <section className='main'>
        {this.toggleAll()}
        <ul className='todo-list'>
          {this.todoList()}
        </ul>
        {this.filterTodo()}
      </section>
    )
  }
}

export default MainSection

import React, { Component, PropTypes } from 'react'
import ToggleAll from './ToggleAll'
import TodoItem from './TodoItem'
import FilterTodo from './FilterTodo'

class MainSection extends Component {
  todoList = () => {
    return this.getShowTodos(this.props.todos, this.props.filter).map(todo => {
      return <TodoItem key={todo.id} todo={todo}
        completedTodo={this.props.completedTodo}
        destory={this.props.destory}/>
    })
  }

  getShowTodos = (todos, filter) => {
    const showTodos = todos.filter(todo => {
      switch (filter) {
        case 'Active':
          return !todo.completed
        case 'Completed':
          return todo.completed
        default:
          return true
      }
    })
    return showTodos
  }

  activeNumber = () => {
    return this.props.todos.filter((todo)=> {
      return todo.completed === false
    }).length
  }

  filterTodo = () => {
    if (this.props.todos.length > 0)
      return <FilterTodo activeCount={this.activeNumber()} filter={this.props.filter} filterChange={this.props.filterChange}/>
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

MainSection.propTypes = {
  todos: PropTypes.array.isRequired,
  filter: PropTypes.string.isRequired,
  filterChange: PropTypes.func.isRequired,
  toggleAllChange: PropTypes.func.isRequired,
  completedTodo: PropTypes.func.isRequired,
  destory: PropTypes.func.isRequired
}

export default MainSection

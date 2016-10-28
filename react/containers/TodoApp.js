import React, { Component } from 'react'
import { connect } from 'react-redux'
import { addTodo, removeTodo, completeTodo, triggerAllTodos, filterTodos, fetchTodos } from '../actions/actions'
import NewTodo from '../components/NewTodo'
import MainSection from '../components/MainSection'
import Footer from '../components/Footer'
import TodoAPI from '../utils/TodoAPI'

class TodoApp extends Component {

  componentDidMount = () => {
    this.props.dispatch(fetchTodos())
  }

  completedTodo = (id) => {
    this.props.dispatch(completeTodo(id))
  }

  addNewTodo = (title) => {
    if (title.trim() === "") return
    this.props.dispatch(addTodo(title))
  }

  toggleAllChange = (event) => {
    this.props.dispatch(triggerAllTodos(event.target.checked))
  }

  destory = (id) => {
    this.props.dispatch(removeTodo(id))
  }

  filterChange = (event) => {
    this.props.dispatch(filterTodos(event.target.text))
  }

  render() {
    return (
      <section>
        <NewTodo addNewTodo={this.addNewTodo}/>
        <MainSection className='main'
          todos={this.props.todos.items}
          completedTodo={this.completedTodo}
          toggleAllChange={this.toggleAllChange}
          destory={this.destory}
          filter={this.props.filter}
          filterChange={this.filterChange}/>
        <Footer />
      </section>
    )
  }
}

function select(state) {
  return {
    todos: state.todos,
    filter: state.filter
  }
}

export default connect(select)(TodoApp)

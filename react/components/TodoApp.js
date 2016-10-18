import React, { Component } from 'react'
import NewTodo from './NewTodo'
import MainSection from './MainSection'
import Footer from './Footer'
import TodoAPI from '../utils/TodoAPI'

const ENTER_KEY = 13

class TodoApp extends Component {
  constructor() {
    super()
    this.state = {
      todos: [],
      newTodo: '',
      filter: 'All',
      showTodos: []
    }
  }

  componentDidMount = () => {
    TodoAPI.getTodos((todos) => {
      this.setState({todos, showTodos: this.getShowTodos(todos, this.state.filter)})
    })
  }

  completedTodo = (id) => {
    const oldTodo = this.state.todos.filter(todo => { return todo.id === id })
    TodoAPI.changeTodoState(id, !oldTodo[0].completed, (changedTodo) => {
      const todos = this.state.todos.map(todo => {
        if (todo.id === changedTodo.id) todo.completed = changedTodo.completed
        return todo
      })
      this.setState({todos})
    })
  }

  addNewTodo = (event) => {
    if (event.keyCode !== ENTER_KEY) return

    if (event.target.value.trim() === "")
      return

    TodoAPI.addNewTodo({title: event.target.value, completed: false}, (newTodo) => {
      this.state.todos.push(newTodo)
      this.setState({todos: this.state.todos, newTodo: '', showTodos: this.getShowTodos(this.state.todos, this.state.filter)})
    })
  }

  handleNewTodoChange = (event) => {
    this.setState({newTodo: event.target.value})
  }

  toggleAllChange = (event) => {
    TodoAPI.toggleAllChange(event.target.checked, (todos) => {
      this.setState({todos, showTodos: this.getShowTodos(todos, this.state.filter)})
    })
  }

  destory = (id) => {
    const todos = this.state.todos.filter(todo => { return todo.id !== id })
    this.setState({todos, showTodos: this.getShowTodos(todos, this.state.filter)})
    TodoAPI.destoryTodo(id)
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

  filterChange = (event) => {
    this.setState({filter: event.target.text, showTodos: this.getShowTodos(this.state.todos, event.target.text)})
  }

  render() {
    return (
      <section>
        <NewTodo newTodo={this.state.newTodo} addNewTodo={this.addNewTodo} handleNewTodoChange={this.handleNewTodoChange}/>
        <MainSection className='main'
          todos={this.state.todos}
          completedTodo={this.completedTodo}
          toggleAllChange={this.toggleAllChange}
          destory={this.destory}
          showTodos={this.state.showTodos}
          filter={this.state.filter}
          filterChange={this.filterChange}/>
        <Footer />
      </section>
    )
  }
}

export default TodoApp

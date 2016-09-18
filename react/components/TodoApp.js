import React, { Component } from 'react'
import NewTodo from './NewTodo'
import MainSection from './MainSection'
import Footer from './Footer'

const ENTER_KEY = 13

class TodoApp extends Component {
  constructor() {
    super()
    this.state = {
      todos: [],
      newTodo: ''
    }
  }

  completedTodo = (id) => {
    const todos = this.state.todos.map(todo => {
      if (todo.id === id) todo.completed = !todo.completed
      return todo
    })
    this.setState({todos})
  }

  addNewTodo = (event) => {
    if (event.keyCode !== ENTER_KEY) return

    const newTodo = {id: this.state.todos.length +1, title: event.target.value, completed: false, date: new Date()}
    this.state.todos.push(newTodo)
    this.setState({todos: this.state.todos, newTodo: ''})
  }

  handleNewTodoChange = (event) => {
    this.setState({newTodo: event.target.value})
  }

  toggleAllChange = (event) => {
    const todos = this.state.todos.map(todo => {
      todo.completed = event.target.checked
      return todo
    })
    this.setState({todos})
  }

  destory = (id) => {
    const todos = this.state.todos.filter(todo => { return todo.id !== id })
    this.setState({todos})
  }

  render() {
    return (
      <section>
        <NewTodo newTodo={this.state.newTodo} addNewTodo={this.addNewTodo} handleNewTodoChange={this.handleNewTodoChange}/>
        <MainSection className='main' todos={this.state.todos}
          completedTodo={this.completedTodo}
          toggleAllChange={this.toggleAllChange}
          destory={this.destory}/>
        <Footer />
      </section>
    )
  }
}

export default TodoApp

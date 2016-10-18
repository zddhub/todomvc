import React, { Component } from 'react'
import NewTodo from '../components/NewTodo'
import MainSection from '../components/MainSection'
import Footer from '../components/Footer'
import TodoAPI from '../utils/TodoAPI'

const ENTER_KEY = 13

class TodoApp extends Component {
  constructor() {
    super()
    this.state = {
      todos: [],
      newTodo: '',
      filter: 'All'
    }
  }

  componentDidMount = () => {
    TodoAPI.getTodos((todos) => {
      this.setState({todos})
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
      this.setState({todos: this.state.todos, newTodo: ''})
    })
  }

  handleNewTodoChange = (event) => {
    this.setState({newTodo: event.target.value})
  }

  toggleAllChange = (event) => {
    TodoAPI.toggleAllChange(event.target.checked, (todos) => {
      this.setState({todos})
    })
  }

  destory = (id) => {
    const todos = this.state.todos.filter(todo => { return todo.id !== id })
    this.setState({todos})
    TodoAPI.destoryTodo(id)
  }

  filterChange = (event) => {
    this.setState({filter: event.target.text})
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
          filter={this.state.filter}
          filterChange={this.filterChange}/>
        <Footer />
      </section>
    )
  }
}

export default TodoApp

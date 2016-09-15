import React, { Component } from 'react'
import NewTodo from './NewTodo'
import MainSection from './MainSection'
import Footer from './Footer'

class TodoApp extends Component {
  render() {
    return (
      <div>
        <NewTodo className='new-todo'/>
        <MainSection todos={this.props.todos} />
        <Footer />
      </div>
    )
  }
}

export default TodoApp

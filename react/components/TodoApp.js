import React, { Component } from 'react'
import NewTodo from './NewTodo'
import MainSection from './MainSection'
import Footer from './Footer'

class TodoApp extends Component {
  render() {
    return (
      <section>
        <NewTodo />
        <MainSection className='main' todos={this.props.todos} />
        <Footer />
      </section>
    )
  }
}

export default TodoApp

import React, { Component, PropTypes } from 'react'

const ENTER_KEY = 13

class NewTodo extends Component{

  handleNewTodo = event => {
    if (event.keyCode !== ENTER_KEY) return
    this.props.addNewTodo(this.refs.newTodo.value)
    this.refs.newTodo.value = ''
  }

  render() {
    return (
      <header className='header'>
        <h1>todos</h1>
        <input className='new-todo' type='text' placeholder='What needs to be done?'
          ref='newTodo'
          onKeyDown={this.handleNewTodo}/>
      </header>
    )
  }
}

NewTodo.propTypes = {
  addNewTodo: PropTypes.func.isRequired  
}

export default NewTodo

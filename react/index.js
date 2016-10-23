import React, { Component } from 'react'
import { render } from 'react-dom'
import TodoApp from './containers/TodoApp'
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import { todos } from './reducers/reducers'

let store = createStore(todos)

render(
  <Provider store={store}>
    <TodoApp />
  </Provider>,
  document.getElementById('root')
)

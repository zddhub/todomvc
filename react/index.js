import React, { Component } from 'react'
import { render } from 'react-dom'
import TodoApp from './components/TodoApp'

var todos = [
  {id: "1", title: "learn css first", completed: false, date: "2016-09-07T22:01:45Z"},
  {id: "2", title: "edit todo", completed: false, date: "2016-09-07T22:02:45Z"},
  {id: "3", title: "learn react", completed: true, date: "2016-09-07T22:03:45Z"}
]

render(
  <TodoApp todos={todos}/>,
  document.getElementById('root')
)

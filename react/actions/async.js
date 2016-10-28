import { requestTodos, receivedTodos, addTodo, removeTodo, completeTodo, triggerAllTodos } from './sync'
import TodoAPI from '../utils/TodoAPI'

export function fetchTodos() {
  return function(dispatch) {
    dispatch(requestTodos())
    return TodoAPI.getTodos(todos => {
      dispatch(receivedTodos(todos))
    })
  }
}

export function requestAddTodo(title) {
  return function(dispatch) {
    return TodoAPI.addNewTodo({title, completed: false}, todo => {
      dispatch(addTodo(todo))
    })
  }
}

export function requestRemoveTodo(id) {
  return function(dispatch) {
    return TodoAPI.destoryTodo(id, todo => {
      dispatch(removeTodo(id))
    })
  }
}

export function requestCompleteTodo(id) {
  return function(dispatch) {
    return TodoAPI.changeTodoState(id, true, todo => {
      dispatch(completeTodo(id))
    })
  }
}

export function requestTriggerAllTodos(isCompleted) {
  return function(dispatch) {
    return TodoAPI.toggleAllChange(isCompleted, todos => {
      dispatch(triggerAllTodos(isCompleted))
    })
  }
}

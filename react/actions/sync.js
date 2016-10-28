export const ADD_TODO = 'ADD_TODO'
export const REMOVE_TODO = 'REMOVE_TODO'
export const COMPLETE_TOOD = 'COMPLETE_TOOD'
export const TRIGGER_ALL_TODOS = 'TRIGGER_ALL_TODOS'
export const FILTER_TODOS = 'FILTER_TODOS'

export const FETCH_TODOS_REQUEST = 'FETCH_TODOS_REQUEST'
export const FETCH_TODOS_SUCCESS = 'FETCH_TODOS_SUCCESS'
// export const FETCH_TODOS_FAILURE = 'FETCH_TODOS_FAILURE'

export function addTodo(todo) {
  return {type: ADD_TODO, todo}
}

export function removeTodo(id) {
  return {type: REMOVE_TODO, id}
}

export function completeTodo(id) {
  return {type: COMPLETE_TOOD, id}
}

export function triggerAllTodos(isCompleted) {
  return {type: TRIGGER_ALL_TODOS, isCompleted}
}

export function filterTodos(filter) {
  return {type: FILTER_TODOS, filter}
}

export function requestTodos() {
  return {type: FETCH_TODOS_REQUEST}
}

export function receivedTodos(todos) {
  return {type: FETCH_TODOS_SUCCESS, todos}
}

export const visibilityFiters = {
  SHOW_ALL: 'SHOW_ALL',
  SHOW_COMPLETED: 'SHOW_COMPLETED',
  SHOW_ACTIVE: 'SHOW_ACTIVE'
}

export const ADD_TODO = 'ADD_TODO'
export const REMOVE_TODO = 'REMOVE_TODO'
export const COMPLETE_TOOD = 'COMPLETE_TOOD'
export const TRIGGER_ALL_TODOS = 'TRIGGER_ALL_TODOS'
export const FILTER_TODOS = 'FILTER_TODOS'

export function addTodo(title) {
  return {type: ADD_TODO, title}
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

export const ADD_TODO = 'ADD_TODO'
export const REMOVE_TODO = 'REMOVE_TODO'
export const COMPLETE_TOOD = 'COMPLETE_TOOD'
export const TRIGGER_ALL_TODOS = 'TRIGGER_ALL_TODOS'
export const FILTER_TODOS = 'FILTER_TODOS'

export addTodo = title => { return {type: ADD_TODO, title} }
export removeTodo = id => { return {type: REMOVE_TODO, id} }
export completeTodo = id => { return {type: COMPLETE_TOOD, id} }
export triggerAllTodos = isCompleted => { return {type: TRIGGER_ALL_TODOS, isCompleted} }
export filterTodos = filter => { return {type: FILTER_TODOS, filter} }

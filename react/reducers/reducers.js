import { ADD_TODO, REMOVE_TODO, COMPLETE_TOOD, TRIGGER_ALL_TODOS, FILTER_TODOS, visibilityFiters } from '../actions/actions'

const initState = {
  todos: [],
  newTodo: '',
  filter: visibilityFiters.SHOW_ALL
}

export function todos(state = initState, action) {
  switch (action.type) {
    case ADD_TODO:
      return Object.assign({}, state, {
        todos: [
          ...state.todos,
          {
            title: action.title,
            completed: false
          }
        ],
        newTodo: ''
      })
    case REMOVE_TODO:
      return Object.assign({}, state, {
        todos: state.todos.filter( todo => todo.id !== action.id)
      })
    case COMPLETE_TOOD:
      return Object.assign({}, state, {
        todos: state.todos.map(todo => {
          if (todo.id === action.id) {
            todo.completed = !todo.completed
          }
          todo
        })
      })
    case TRIGGER_ALL_TODOS:
      return Object.assign({}, state, {
        todos: state.todos.map(todo => {
          todo.completed = action.isCompleted
          todo
        })
      })
    case FILTER_TODOS:
      return Object.assign({}, state, {
        filter: action.filter
      })
    default:
      return state
  }
}

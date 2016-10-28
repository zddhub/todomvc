import { FETCH_TODOS_REQUEST, FETCH_TODOS_SUCCESS, ADD_TODO, REMOVE_TODO, COMPLETE_TOOD, TRIGGER_ALL_TODOS } from '../actions/sync'

const initialState = {
  isFetching: false,
  didInvalidate: false,
  items: []
}

export default function todos(state = initialState, action) {
  switch (action.type) {
    case FETCH_TODOS_REQUEST:
      return state
    case FETCH_TODOS_SUCCESS:
      return Object.assign({}, state, {
        isFetching: false,
        didInvalidate: false,
        items: action.todos
      })
    case ADD_TODO:
      return Object.assign({}, state, {
        isFetching: false,
        didInvalidate: true,
        items: [
          ...state.items,
          action.todo
        ]
      })
    case REMOVE_TODO:
      return Object.assign({}, state, {
        isFetching: false,
        didInvalidate: true,
        items: state.items.filter( todo => todo.id !== action.id)
      })
    case COMPLETE_TOOD:
      return Object.assign({}, state, {
        isFetching: false,
        didInvalidate: true,
        items: state.items.map(todo => {
          if (todo.id === action.id) {
            todo.completed = !todo.completed
          }
          return todo
        })
      })
    case TRIGGER_ALL_TODOS:
      return Object.assign({}, state, {
        isFetching: false,
        didInvalidate: true,
        items: state.items.map(todo => {
          todo.completed = action.isCompleted
          return todo
        })
      })
    default:
      return state
  }
}

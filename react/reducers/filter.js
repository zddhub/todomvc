import { FILTER_TODOS } from '../actions/sync'

export default function filter(state = 'All', action) {
  switch (action.type) {
    case FILTER_TODOS:
      return action.filter
    default:
      return state
  }
}

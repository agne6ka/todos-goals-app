import {
  RECEIVE_DATA
} from '../actions/initial'

export default function todos (state = [], action) {
  switch(action.type) {
    case RECEIVE_DATA :
      return action.todos;
    default :
      return state
  }
}
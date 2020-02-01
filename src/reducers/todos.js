import { ADD_TODO, REMOVE_TODO } from '../actions/todos'
import { RECEIVE_DATA } from '../actions/initial'

export default function todos (state = [], action) {
  switch(action.type) {
    case RECEIVE_DATA :
      return action.todos;
    case ADD_TODO :
      return state.concat([action.todo]);
    case REMOVE_TODO:
      return state.filter((todo) => todo.id !== action.id);
    default :
      return state
  }
}
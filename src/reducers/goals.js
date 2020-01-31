import {
  RECEIVE_DATA
} from '../actions/initial'

export default function goals (state = [], action) {
  switch(action.type) {
    case RECEIVE_DATA :
      return action.goals;
    default :
      return state
  }
}
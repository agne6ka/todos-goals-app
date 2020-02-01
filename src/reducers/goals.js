import {ADD_GOAL} from "../actions/goals";
import {RECEIVE_DATA} from '../actions/initial'

export default function goals(state = [], action) {
  switch (action.type) {
    case RECEIVE_DATA:
      return action.goals;
    case ADD_GOAL :
      return state.concat([action.goal]);
    default :
      return state
  }
}
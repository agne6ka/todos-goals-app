import API from 'goals-todos-api'

export const ADD_TODO = 'ADD_TODO';

const addTodo = (todo) => {
  return {
    type: ADD_TODO,
    todo
  }
};

export const handleAddTodo = (name, callback) => {
  return (dispatch) => {
    return API.saveTodo(name)
      .then((todo) => {
        dispatch(addTodo(todo));
        callback();
      })
      .catch(() => {
        alert('There was an error')
      })
  }
};
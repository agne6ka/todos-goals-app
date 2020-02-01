import API from 'goals-todos-api'

export const ADD_TODO = 'ADD_TODO';
export const REMOVE_TODO = 'REMOVE_TODO';

const addTodo = (todo) => {
  return {
    type: ADD_TODO,
    todo
  }
};

const removeTodo = (id) => {
  return {
    type: REMOVE_TODO,
    id
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


export const handleRemoveTodo = (todo) => {
  return (dispatch) => {
    dispatch(removeTodo(todo.id));

    return API.deleteTodo(todo.id)
      .catch(() => {
        dispatch(addTodo(todo));
        alert('There was an error')
      })
  }
};

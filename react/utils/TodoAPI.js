import $ from 'jquery'

const API_URL = 'http://localhost:1337'

class TodoAPI {
  static getTodos = (success) => {
    $.ajax({
      url: API_URL + '/todos',
      dataType: 'json',
      success,
      error: (xhr, status, err) => {
        console.error(url, status, err.toString())
      }
    })
  }

  static addNewTodo = ({title, completed}, success) => {
    $.ajax({
      type: 'POST',
      url: API_URL + '/todos',
      dataType: 'json',
      data: { title, completed },
      success,
      error: (xhr, status, err) => {
        console.error(url, status, err.toString())
      }
    })
  }

  static toggleAllChange = (completed, success) => {
    $.ajax({
      type: 'PUT',
      url: API_URL + '/todos',
      dataType: 'json',
      data: { completed },
      success,
      error: (xhr, status, err) => {
        console.error(url, status, err.toString())
      }
    })
  }

  static changeTodoState = (id, completed, success) => {
    $.ajax({
      type: 'PUT',
      url: API_URL + '/todos/' + id,
      dataType: 'json',
      data: { completed },
      success,
      error: (xhr, status, err) => {
        console.error(url, status, err.toString())
      }
    })
  }

  static destoryTodo = (id, success) => {
    $.ajax({
      type: 'DELETE',
      url: API_URL + '/todos/' + id,
      dataType: 'json',
      success,
      error: (xhr, status, err) => {
        console.error(url, status, err.toString())
      }
    })
  }
}

export default TodoAPI

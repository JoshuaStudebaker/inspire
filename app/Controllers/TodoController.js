import todoService from "../Services/TodoService.js";
import { ProxyState } from "../AppState.js";

//TODO Create the draw function
function _drawTodos() {
  let template = "";
  ProxyState.todos.forEach((td) => (template += td.Template));
  document.getElementById("todos-display").innerHTML = template;
  let count = _countTodos(ProxyState.todos).toString();
  let template2 = count + " more until done!";
  document.getElementById("undoneTasks").innerHTML = template2;
}

function _countTodos(todos) {
  let count = 0;

  for (let i = 0; i < todos.length; i++) {
    let todo = todos[i];
    if (!todo.completed) {
      count++;
    }
  }
  return count;
}

export default class TodoController {
  constructor() {
    //TODO Remember to register your subscribers
    ProxyState.on("todos", _drawTodos);
    this.getTodos();
  }

  getTodos() {
    try {
      todoService.getTodos();
    } catch (error) {
      console.error(error);
    }
  }

  addTodo() {
    event.preventDefault();
    let form = event.target;
    console.log(form);
    //TODO build the todo object from the data that comes into this method
    let todo = {
      // @ts-ignore
      description: form.description.value,
    };
    try {
      console.log(todo);
      todoService.addTodo(todo);
    } catch (error) {
      console.error(error);
    }
  }

  /**
   * This method takes in an id of the Todo that should be togggled as complete
   * @param {string} todoId
   */
  toggleTodoStatus(todoId) {
    try {
      todoService.toggleTodoStatus(todoId);
    } catch (error) {
      console.error(error);
    }
  }

  /**
   * This method takes in an id of the Todo that should be removed
   * @param {string} todoId
   */
  removeTodo(todoId) {
    try {
      todoService.removeTodo(todoId);
    } catch (error) {
      console.error(error);
    }
  }
}

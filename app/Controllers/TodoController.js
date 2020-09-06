import todoService from "../Services/TodoService.js";
import { ProxyState } from "../AppState.js";

//TODO Create the draw function
function _drawTodos() {
  let template = "";
  ProxyState.todos.forEach((td) => (template += td.Template));
  document.getElementById("todos-display").innerHTML = template;
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
    console.log("is this working?");
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

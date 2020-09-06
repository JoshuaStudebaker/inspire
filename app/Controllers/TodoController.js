import todoService from "../Services/TodoService.js";
import { ProxyState } from "../AppState.js";

//TODO Create the draw function
function _drawTodos() {
  let template = "";
  ProxyState.todos.forEach((td) => (template += td.Template));
  document.getElementById("todos-display").innerHTML = template;
}

function _drawUser() {
  let template = "";
  ProxyState.todos.forEach((td) => (template += td.UserTemplate));
  document.getElementById("user-display").innerHTML = template;
}

function _drawTodoQuestion(user) {
  let template =
    "<p>Hello " +
    user +
    "! Would you like to create a Todo List?</p><div><form onsubmit='app.todoController.addTodoListDisplay(" +
    user +
    ")'</form><button type='submit' class='btn btn-primary mb-2'>Yes!</button></form";
  document.getElementById("initial-user-display").innerHTML = template;
}

function _drawTodoList() {
  let template =
    "<form onsubmit='app.todoController.addTodo()'>    < div class='form-group' >      <label for=description'>Task</label>        < input type = 'text' class='form-control' name = 'description' id = description' placeholder='Task...' />            </div >    <div class='col-auto'>      <button type='submit' class='btn btn-primary mb-2'>Submit</button>    </div>        </form >";
  document.getElementById("todo-list-display").innerHTML = template;
}
export default class TodoController {
  constructor() {
    //TODO Remember to register your subscribers
    ProxyState.on("todos", _drawTodos);
    todoService.getTodos();
  }

  getTodos() {
    try {
      todoService.getTodos();
    } catch (error) {
      console.error(error);
    }
  }

  addUser() {
    event.preventDefault();
    let userForm = event.target;
    console.log(userForm);
    // @ts-ignore
    let user = userForm.user.value;
    todoService.addUser(user);
    _drawTodoQuestion(user);
  }

  addTodoList() {
    event.preventDefault;
    console.log(event.target);
    _drawTodoList();
  }
  addTodo() {
    event.preventDefault();
    let form = event.target;
    console.log(form);
    //TODO build the todo object from the data that comes into this method
    let todo = {
      // @ts-ignore
      user: form.user.value,
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

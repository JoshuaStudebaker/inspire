import { ProxyState } from "../AppState.js";
import { api } from "../Services/AxiosService.js";
import Todo from "../Models/Todo.js";

// TODO you will need to change 'YOURNAME' to your actual name or all requests will be rejected
let url = "joshua/todos/";

class TodoService {
  async getTodos() {
    console.log("Getting the Todo List");
    let res = await api.get(url);
    console.log(res);
    ProxyState.todos = res.data.data.map((t) => new Todo(t));
    //TODO Handle this response from the server
  }

  async addTodo(todo) {
    let res = await api.post(url, todo);
    //TODO Handle this response from the server
  }

  async toggleTodoStatus(todoId) {
    let todo = await ProxyState.todos.find((todo) => todo._id == todoId);
    //TODO Make sure that you found a todo,
    //		and if you did find one
    //		change its completed status to whatever it is not (ex: false => true or true => false)
    if (!todo) {
      throw new Error("To-Do Task not found!");
    }
    if (todo.completed == true) {
      todo.completed = false;
    } else {
      todo.completed = true;
    }
    console.log(todo);

    // REVIEW This seems to be working, but I am not sure why
    let res = await api.put(url + todoId, todo);

    //TODO how do you trigger this change
    ProxyState.todos = ProxyState.todos;
  }

  async removeTodo(todoId) {
    //TODO Work through this one on your own
    //		what is the request type
    //		once the response comes back, how do you update the state
    // NOTE originally had this as: `${url}:${todoId}` but it threw up an error message
    let input = `${url}${todoId}`;
    console.log(input);
    let res = await api.delete(input);
    console.log(res);
    let index = ProxyState.todos.findIndex((t) => t._id == todoId);
    ProxyState.todos.splice(index, 1);
    ProxyState.todos = ProxyState.todos;
  }
}

const todoService = new TodoService();
export default todoService;

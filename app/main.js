import TodoController from "./controllers/TodoController.js";
import WeatherController from "./controllers/WeatherController.js";
import QuoteController from "./Controllers/QuoteController";
import ImageController from "./Controllers/ImageController";

//TODO Dont forget to register all your controllers
class App {
  constructor() {
    this.weatherController = new WeatherController();
    this.todoController = new TodoController();
    this.quoteController = new QuoteController();
    this.imageController = new ImageController();
  }
}

window["app"] = new App();

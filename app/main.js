import TodoController from "./controllers/TodoController.js";
import WeatherController from "./controllers/WeatherController.js";
import QuoteController from "./Controllers/QuoteController.js";
import ImageController from "./Controllers/ImageController.js";

//TODO Dont forget to register all your controllers
class App {
  constructor() {
    this.weatherController = new WeatherController();
    this.todoController = new TodoController();
    this.quoteController = new QuoteController();
    this.imageController = new ImageController();
    clock();
  }
}
function clock() {
  let now = new Date();
  let h = now.getHours();
  let m = now.getMinutes();
  let amOrPm = "am";
  let hourDisplay = h;
  if (h > 12) {
    hourDisplay = h - 12;
    amOrPm = "pm";
  }
  if (h == 12 && m == 0) {
    amOrPm = "noon";
  }

  if (h == 0 && m == 0) {
    amOrPm = "midnight";
  }

  if (h == 0) {
    hourDisplay = 12;
  }

  m = checkTime(m);
  document.getElementById("clock").innerHTML =
    hourDisplay + ":" + m + " " + amOrPm;
  let t = setTimeout(clock, 500);
}

function checkTime(timeUnit) {
  if (timeUnit < 10) {
    timeUnit = "0" + timeUnit;
  } // add zero in front of numbers < 10
  return timeUnit;
}

window["app"] = new App();

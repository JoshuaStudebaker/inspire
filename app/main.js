import TodoController from "./Controllers/TodoController.js";
import WeatherController from "./Controllers/WeatherController.js";
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
  }
  if (h >= 12) {
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
  let greeting = "";
  switch (h) {
    case 0:
    case 1:
    case 2:
    case 3:
      greeting = "What are you doing up? 🙃";
      break;
    case 4:
    case 5:
    case 6:
    case 7:
    case 8:
    case 9:
    case 10:
      greeting = "Good Morning ☕";
      break;
    case 11:
      greeting = "Getting time for lunch 🍔";
      break;
    case 12:
    case 13:
    case 14:
    case 15:
    case 16:
      greeting = "Good Afternoon ☀️";
      break;
    case 17:
      greeting = "Hmm, 5:00 😉 🍻";
      break;
    case 18:
    case 19:
      greeting = "Good Evening 🍻🍻🍻";
      break;
    case 20:
    case 21:
      greeting = "Getting Late... 📺 ";
      break;
    case 22:
    case 23:
      greeting = "Gettin' Real Late... 😴 ";
      break;
  }

  m = checkTime(m);

  document.getElementById("clock").innerHTML =
    hourDisplay + ":" + m + " " + amOrPm;
  document.getElementById("greeting").innerHTML = greeting;
  let t = setTimeout(clock, 500);
}

function checkTime(timeUnit) {
  if (timeUnit < 10) {
    timeUnit = "0" + timeUnit;
  } // add zero in front of numbers < 10
  return timeUnit;
}

window["app"] = new App();

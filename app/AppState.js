import Todo from "./models/Todo.js";
import Weather from "./models/Weather.js";
import Quote from "./models/Quote.js";
import Image from "./models/Image.js";
import { EventEmitter } from "./Utils/EventEmitter.js";
import { isValidProp } from "./Utils/isValidProp.js";

// TODO you will want to add all your other data to the AppState
class AppState extends EventEmitter {
  /** @type {Todo[]} */
  todos = [];

  /** @type {Weather} */
  weather = null;

  /** @type {Quote} */
  quote = null;

  /** @type {Image} */
  image = null;
}

export const ProxyState = new Proxy(new AppState(), {
  get(target, prop) {
    isValidProp(target, prop);
    return target[prop];
  },
  set(target, prop, value) {
    isValidProp(target, prop);
    target[prop] = value;
    target.emit(prop, value);
    return true;
  },
});

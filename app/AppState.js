import Todo from "./Models/Todo.js";
import Weather from "./Models/Weather.js";
import Quote from "./Models/Quote.js";
import Image from "./Models/Image.js";
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

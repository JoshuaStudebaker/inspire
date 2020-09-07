import { ProxyState } from "../AppState.js";
import Weather from "../Models/Weather.js";
import { api } from "./AxiosService.js";

class WeatherService {
  temperatureUnit() {
    let weather = ProxyState.weather;
    if (weather.temperatureUnitF == true) {
      weather.temperatureUnitF = false;
    } else {
      weather.temperatureUnitF = true;
    }
    console.log("weather", weather);

    // let res = await api.put(url + todoId, todo);

    ProxyState.weather = ProxyState.weather;
  }
  async getWeather() {
    console.log("Calling the Weatherman");
    let res = await api.get("weather");
    ProxyState.weather = new Weather(res.data);
  }
}

const weatherService = new WeatherService();
export default weatherService;

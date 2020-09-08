export default class Weather {
  constructor(data) {
    console.log("[RAW WEATHER API DATA]", data);
    //NOTE Have you ever wanted to know the temperature measured in kelvin?
    //      That is what this data returns! data.main.temp is the temperature in Kelvin

    //TODO You should convert the temperature data to either F or C
    //      check out the other data that comes back and see if there is anything you want to try

    this.city = data.name;
    this.kelvin = data.main.temp;
    this.celsius = Math.round(this.kelvin - 273.15);
    this.fahrenheit = Math.round((this.celsius * 9) / 5 + 32);
    this.temperatureUnitF = true;
    this.icon = data.weather[0].icon;
    this.description = data.weather[0].main;
    console.log(data);
  }

  get Template() {
    return `
  <h3 class="weather my-0">${this.city} Weather:</h3><h3 class="text-muted">${this.description} and ${this.TemplateUnit}</h3>
  `;
  }

  get TemplateUnit() {
    if (!this.temperatureUnitF) {
      return `${this.celsius}C | <span class="blue-pointer" onclick="app.weatherController.temperatureUnit()">F</span>
    `;
    }
    return `${this.fahrenheit}F | <span class="blue-pointer" onclick="app.weatherController.temperatureUnit()">C</span>`;
  }
}

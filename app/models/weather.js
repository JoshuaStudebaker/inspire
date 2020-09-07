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
  <p>${this.city} Weather: ${this.TemplateUnit} and ${this.description}</p>
  `;
  }

  get TemplateUnit() {
    if (!this.temperatureUnitF) {
      return `${this.celsius}C
    `;
    }
    return `${this.fahrenheit}F`;
  }
}

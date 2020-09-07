export default class Weather {
  constructor(data) {
    console.log("[RAW WEATHER API DATA]", data);
    //NOTE Have you ever wanted to know the temperature measured in kelvin?
    //      That is what this data returns! data.main.temp is the temperature in Kelvin

    //TODO You should convert the temperature data to either F or C
    //      check out the other data that comes back and see if there is anything you want to try

    this.city = data.name;
    this.kelvin = data.main.temp;

  }
  let celsius = this.kelvin - 273.15
  let fahrenheit = celsius*9/5 + 32

  get Template() {
    return `
  <p>Weather: ${this.kelvin}K - ${this.city}</p>
  `;
  }
}

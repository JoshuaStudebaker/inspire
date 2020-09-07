//TODO Create methods for constructor, and rendering the image to the page
//      (you may wish to set it as a background image: https://www.w3schools.com/JSREF/prop_style_backgroundimage.asp)
import { ProxyState } from "../AppState.js";
import imageService from "../Services/ImageService.js";

function drawImage() {
  let template = ProxyState.image.Template;
  document.getElementById("background").style.backgroundImage = template;
}
export default class ImageController {
  constructor() {
    ProxyState.on("image", drawImage);
    this.getQuote();
  }

  getQuote() {
    try {
      imageService.getImage();
    } catch (e) {
      console.error(e);
    }
  }
}

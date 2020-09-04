//TODO create methods to retrieve data and save to the State
import { ProxyState } from "../AppState.js";
import Image from "../Models/Image.js";
import { api } from "./AxiosService.js";

class ImageService {
  async getImage() {
    let res = await api.get("images");
    ProxyState.image = new Image(res.data);
  }
}

const imageService = new ImageService();
export default imageService;

import axios from "axios";

export default axios.create({
  baseURL: "https://api.rawg.io/api",
  params: {
    key: "b63c3ecd539d4dbe87de7e18fc77a171",
  },
});

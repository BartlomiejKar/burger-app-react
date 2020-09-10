import axios from "axios";

const instance = axios.create({
  baseURL: "https://burger-app-e7517.firebaseio.com/",
});

export default instance;

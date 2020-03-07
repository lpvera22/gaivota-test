import axios from "axios";
export function getFarms() {
  return axios.get("http://localhost:5000/api/farms/");
}

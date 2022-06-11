import axios from "axios";

//URL API
const URL = "https://rickandmortyapi.com/api";

//Conection API
export const apiLocations = axios.create({
  baseURL: URL
})


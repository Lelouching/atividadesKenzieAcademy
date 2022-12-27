import axios from "axios";

export const api = axios.create({
    baseURL: "//pokeapi.co/api/v2/",
    timeout: 5000
})
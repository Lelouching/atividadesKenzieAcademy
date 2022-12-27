import axios from "axios";

export const api = axios.create({
    baseURL: "https://kenzieshop.herokuapp.com/sessions/",
    timeout: 10000
})
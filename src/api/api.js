import axios from "axios";

const BASE_URL = import.meta.env.VITE_BASE_URL;

export const api = axios.create({
    baseURL: BASE_URL,
});

api.interceptors.request.use((config) => {
    config.headers = {
        "x-rapidapi-key": "60cdc34582mshc2b9d6d156cfd5dp14f02bjsnea3edc459eca",
        "x-rapidapi-host": "imdb236.p.rapidapi.com",
    };
    return config;
});

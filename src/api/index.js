import { api } from "./api";

export const getAllMovies = async() =>{
    return (await api.get("api/imdb/top250-movies")).data
}
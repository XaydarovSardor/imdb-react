import { api } from "./api";

export const getAllTvShows = async () => {
    return (await api.get("api/imdb/most-popular-tv")).data
}

export const getAllMovies = async () => {
    return (await api.get("api/imdb/top250-movies")).data
}
export const getSingleMovie = async (id) => {
    return (await api.get(`api/imdb/${id}`)).data
}

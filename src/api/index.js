import { API_PATHS } from "../config/constants"
import { base_api } from "./api"

export const getAllTvShows = async () => {
    return (await base_api.get(API_PATHS.MOST_POPULAR_TV_SHOWS)).data
}
export const getAllMovies = async () => {
    return (await base_api.get(API_PATHS.TOP_250_MOVIES)).data
}
export const getSingleMovie = async (id) => {
    return (await base_api.get(API_PATHS.GET_SINGLE_MOVIE(id))).data
}
export const getAllCasts = async (id) => {
    return (await base_api.get(API_PATHS.GET_ALL_CASTS(id))).data
}
export const getSingleCast = async (id) => {
    return (await base_api.get(API_PATHS.GET_SINGLE_CAST(id))).data
}
export const getAllGenres = async () => {
    return (await base_api.get(API_PATHS.GET_ALL_GENRES)).data
}
export const getSingleGenre = async (genre) => {
    return (await base_api.get(API_PATHS.GET_SINGLE_GENRE(genre))).data
}
export const getLowesRatedMovies = async () => {
    return (await base_api.get(API_PATHS.GET_LOW_RATED_MOVIES)).data
}
export const getLikeThis = async (id) => {
    return (await base_api.get(API_PATHS.GET_MORE_LIKE_THIS(id))).data
}
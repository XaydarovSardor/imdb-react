import { API_PATHS } from "../config/constants"
import { base_api } from "./api"

export const getAllTvShows = async () =>{
    return (await base_api.get(API_PATHS.MOST_POPULAR_TV_SHOWS)).data
}
export const getAllMovies = async () =>{
    return (await base_api.get(API_PATHS.TOP_250_MOVIES)).data
}
export const getSingleMovie = async (id) =>{
    return (await base_api.get(API_PATHS.GET_SINGLE_MOVIE(id))).data
}
export const getAllCasts = async (id) =>{
    return (await base_api.get(API_PATHS.GET_ALL_CASTS(id))).data
}
export const getSingleCast = async (id) =>{
    return (await base_api.get(API_PATHS.GET_SINGLE_CAST(id))).data
}
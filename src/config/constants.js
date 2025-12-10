export const API_PATHS = {
    TOP_250_MOVIES: "/api/imdb/top250-movies",
    MOST_POPULAR_TV_SHOWS: "api/imdb/most-popular-tv",
    GET_SINGLE_MOVIE: (id) => `api/imdb/${id}`,
    GET_ALL_CASTS: (id) => `/api/imdb/${id}/cast`,
    GET_SINGLE_CAST: (id) => `/api/imdb/name/${id}`,
    GET_ALL_GENRES: `/api/imdb/genres`,
    GET_SINGLE_GENRE:(genre)=> `/api/imdb/${genre}`,
    GET_LOW_RATED_MOVIES:`/api/imdb/lowest-rated-movies`,
    GET_MORE_LIKE_THIS:(id)=>`/api/imdb/${id}/similar`,
}
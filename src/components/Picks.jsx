import { useEffect, useState } from "react";
import { getAllTvShows } from "../api";
import { Title } from "./Title";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import 'swiper/css';
import 'swiper/css/navigation';
import { Link } from "react-router-dom";
export const Picks = () => {
    const [movies, setMovies] = useState([])
    useEffect(() => {
        const getMovies = async () => {
            try {
                const res = await getAllTvShows()
                setMovies(res)
            } catch (error) {
                console.log(error);
            }
        }
        getMovies()
    }, [])
    return (
        <>
            <div className="container">
                <div className="flex justify-between items-center mb-12">
                    <h2 className="text-2xl text-yellow font-bold text-yellow-400">What to watch</h2>
                    <a href="#" className="text-blue-400 text-sm p-2 rounded-2xl transition-all ease-in delay-20 hover:bg-black flex items-center gap-1">
                        Get more recommendations
                        <span>›</span>
                    </a>
                </div>
                <Title title={"Top picks"} subtitle={"TV shows and movies just for you"} color={"white"} href={"picks"}/>
                <Swiper slidesPerView={6}
                    spaceBetween={30}
                    navigation={true}
                    modules={[Navigation]}
                    className="mySwiper"
                >
                    {movies.length > 12 ? movies.slice(0, 12).map((movie) => (
                        <SwiperSlide key={movie.id}>
                            <Link to={`/${movie.id}`} className="mt-10 w-full bg-black text-white rounded-2xl overflow-hidden shadow-lg">
                                <img src={movie.primaryImage} alt={movie.primaryTitle} className="w-full h-60 object-cover" />
                                <div className="p-4 bg-gradient-to-t from-black to-transparent">
                                    <h2>{movie.primaryTitle.length > 15 ? movie.primaryTitle.slice(0, 15) + `...` : movie.primaryTitle}</h2>
                                    <div className="flex items-center space-x-2">
                                        <span className="bg-yellow-400 text-gray-400 font-semibold py-1 rounded-md text-sm flex items-center">
                                            <svg className="w-4 text-yellow h-4 mr-1" viewBox="0 0 24 24" fill="none">
                                                <path d="M12 .587l3.668 7.431 8.2 1.192-5.934 5.786 1.4 8.168L12 18.896 4.666 23.164l1.4-8.168L.132 9.21l8.2-1.192L12 .587z" fill="currentColor" />
                                            </svg>
                                            {movie.averageRating}
                                        </span>

                                    </div>
                                    {/* <h3 className="text-md font-semibold">{movie.title.length > 15 ? movie.title.slice(0, 15) + `...` : movie.title}</h3> */}

                                    <div className="mt-3">
                                        <button className="w-full flex items-center justify-center gap-2 px-4 py-2 bg-gray-800/80 hover:bg-gray-700 rounded-full border border-white/10 text-blue-300">
                                            <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none">
                                                <path d="M12 5v14M5 12h14" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                            </svg>
                                            Watchlist
                                        </button>
                                    </div>
                                    <div className="mt-3 flex items-center justify-between">
                                        <button onClick={() => setMovies(movie)} className="flex items-center gap-2 text-sm text-white/90 hover:bg-white/5 p-2 rounded-3xl transition-all delay-20 ease-in">
                                            <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none">
                                                <path d="M5 3v18l15-9L5 3z" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" />
                                            </svg>
                                            Trailer
                                        </button>

                                        <button
                                            className="w-8 h-8 rounded-full hover:bg-white/5 transition-all delay-20 ease-in flex items-center justify-center border border-white/10"
                                            aria-label="info"
                                        >
                                            <svg className="w-4 h-4 text-white/90" viewBox="0 0 24 24" fill="none">
                                                <path d="M12 2a10 10 0 100 20 10 10 0 000-20zM11 10h2v6h-2zm0-4h2v2h-2z" fill="currentColor" />
                                            </svg>
                                        </button>
                                    </div>
                                    <div className="mt-3 text-xs text-white/60">
                                        In theaters {movie.releaseDate}
                                    </div>
                                </div>
                            </Link>
                        </SwiperSlide>
                    )) : <h2>Movies not found

                    </h2>}
                </Swiper>
            </div>


        </>
    )
}

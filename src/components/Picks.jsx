import { useEffect, useState } from "react";
import { getAllTvShows } from "../api";
import { Title } from "./Title";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import 'swiper/css';
import 'swiper/css/navigation';
import { Link } from "react-router-dom";
import { ChevronRight } from "lucide-react";
export const Picks = () => {
    const [movies, setMovies] = useState([])
    const [selectedMovie, setSelectedMovie] = useState(null);
    const [infoModal, setInfoModal] = useState(false)
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
                <Title title={"Top picks"} subtitle={"TV shows and movies just for you"} color={"white"} />
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
                            {infoModal && (
                                <div className="fixed inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center z-[999]">
                                    <div className="bg-[#111] text-white rounded-2xl p-6 w-full max-w-lg shadow-xl relative">

                                        <button
                                            onClick={() => setInfoModal(false)}
                                            className="absolute top-3 right-3 text-gray-400 hover:text-white"
                                        >
                                            ✕
                                        </button>

                                        <div className="flex gap-4">
                                            <img
                                                className="h-[110px] w-[80px] rounded-lg object-cover"
                                                src={movie.primaryImage}
                                                alt={movie.primaryTitle}
                                            />

                                            <div className="flex flex-col">
                                                <div className="flex items-center gap-1 hover:text-yellow-400 cursor-pointer transition">
                                                    <h3 className="text-white font-semibold">{movie.primaryTitle}</h3>
                                                    <ChevronRight size={18} />
                                                </div>

                                                <p className="text-sm text-gray-400">
                                                    {movie.releaseDate} · {movie.runtimeMinutes} min · {movie.contentRating} · {movie.type}
                                                </p>

                                                <h4 className="mt-2 text-xs text-gray-500 font-semibold uppercase">IMDb Rating</h4>
                                                <div className="flex items-center gap-2">
                                                    <span className="bg-yellow-400 text-gray-900 font-semibold px-2 py-1 rounded flex items-center">
                                                        <svg className="w-4 h-4 mr-1" viewBox="0 0 24 24" fill="none">
                                                            <path d="M12 .587l3.668 7.431 8.2 1.192-5.934 5.786 1.4 8.168L12 18.896 4.666 23.164l1.4-8.168L.132 9.21l8.2-1.192L12 .587z" fill="currentColor" />
                                                        </svg>
                                                        {movie.averageRating}/10
                                                    </span>
                                                </div>
                                            </div>
                                        </div>

                                        <p className="text-gray-300 text-sm mt-5 leading-relaxed">
                                            A mockumentary on a group of typical office workers, where the workday consists of
                                            ego clashes, inappropriate behavior, tedium and romance.
                                        </p>

                                        <div className="text-sm text-gray-400 mt-4">
                                            Because of your interest in
                                            <ul className="list-disc list-inside ml-4 mt-1 text-gray-300">
                                                <li>Better Call Saul</li>
                                                <li>Game of Thrones</li>
                                            </ul>
                                        </div>

                                        <button className="mt-5 bg-blue-600 hover:bg-blue-700 w-full text-white font-medium py-2 rounded-lg">
                                            + Watchlist
                                        </button>

                                    </div>
                                </div>
                            )}
                        </SwiperSlide>
                    )) : <h2>Movies not found

                    </h2>}
                </Swiper>
            </div>


        </>
    )
}

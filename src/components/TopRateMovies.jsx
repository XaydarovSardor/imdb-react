import { Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';
import { useEffect, useState } from "react";
import { getAllTvShows } from "../api";
import { Link } from "react-router-dom";
export const TopRateMovies = () => {
    const [movies, setMovies] = useState([])
    const [loading, setLoading] = useState(true)
    useEffect(() => {
        const getTvShows = async () => {
            try {
                const res = await getAllTvShows()
                setMovies(res)
                setLoading(false)
            } catch (error) {
                console.log(error);
            }
        }
        getTvShows()
    }, [])
    return (
        <>
            <div className="container">
                <Swiper style={{margin:"70px 0"}} slidesPerView={1}
                    navigation={true}
                    modules={[Navigation]}
                    className="mySwiper w-[850px] h-[550px] mx-0 mt-10"
                >
                    {loading ? (
                        <h2 className="text-semibold text-red-400">Loading...</h2>
                    ) : movies?.length > 8 ? (
                        movies.slice(0, 8).map(movie => (
                            <SwiperSlide key={movie.id}>
                                <Link
                                    to={`/${movie.id}`}
                                    className="text-center relative flex w-full h-[550px] cursor-pointer group"
                                >
                                    <img
                                        src={movie?.thumbnails[2]?.url}
                                        alt={movie.fullName}
                                        className="w-full h-full group-hover:opacity-70"
                                    />
                                    <h2 className="text-4xl absolute bottom-8 left-8 font-semibold text-white">{movie.primaryTitle}</h2>
                                </Link>
                            </SwiperSlide>
                        ))
                    ) : (
                        <h2 className="text-white">Malumotlar kelmadi</h2>
                    )}
                </Swiper>
            </div>
        </>
    );
};

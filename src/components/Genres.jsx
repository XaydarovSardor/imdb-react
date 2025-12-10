import { useEffect, useState } from "react";
import { Title } from "./Title";
import { getAllGenres } from "../api";
import { Link } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";

export const Genres = () => {
    const [genres, setGenres] = useState([])
    useEffect(() => {
        const getGenresFetch = async () => {
            try {
                const res = await getAllGenres()
                setGenres(res)
            } catch (error) {
                console.log(error);

            }
        }
        getGenresFetch()
    }, [])
    console.log(genres);

    return (
        <>
            <div className="container">
                <Title title={"Popular interests"} color={"white"} />
                <div className="flex justify-between mt-3">
                    <Swiper slidesPerView={6}
                        spaceBetween={30}
                        navigation={true}
                        modules={[Navigation]}
                        className="mySwiper"
                    >
                        {genres.map(genre => (
                            <SwiperSlide key={genre}>
                                <Link
                                    key={genre}
                                    to={`/genre/${genre}`}
                                    className="relative w-64 h-40 rounded-xl overflow-hidden max-w-72 w-full bg-gray-900 flex-shrink-0"
                                >
                                    <img
                                        src={`./genres/${genre}.jpg`}
                                        alt={genre}
                                        className="w-full h-full object-cover"
                                        onError={(e) => (e.target.src = "/genres/default.jpg")}
                                    />

                                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />

                                    <div className="absolute bottom-3 left-4 text-white text-lg font-medium">
                                        {genre}
                                    </div>
                                </Link>

                            </SwiperSlide>
                        ))}

                    </Swiper>
                </div>
            </div>
        </>
    );
}


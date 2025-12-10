import { useEffect, useState } from 'react'
import { Title } from './Title'
import { getAllCasts } from '../api'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation } from 'swiper/modules'
import { Link } from 'react-router-dom'

export const PopularActors = () => {
    const [casts, setCasts] = useState([])
    const [loading, setLoading] = useState(true)
    useEffect(() => {
        const getAllCast = async () => {
            try {
                const res = await getAllCasts("tt0903747")
                setCasts(res)
                setLoading(false)
            } catch (error) {
                console.log(error);
            }
        }
        getAllCast()
    }, [])
    return (
        <div className="text-white py-10 container">

            <Title title={"Most popular celebrities"} color={"white"} href={"casts"}/>
            <h3 className="mb-3 uppercase text-yellow mt-3 font-semibold text-xs">Top rising</h3>
            <Swiper slidesPerView={6}
                spaceBetween={30}
                navigation={true}
                modules={[Navigation]}
                className="mySwiper"
            >
                {loading ? (
                    <h2 className="text-semibold text-red-400">Loading...</h2>
                ) : casts?.length > 0 ? (
                    casts.map(cast => (
                        <SwiperSlide key={cast.id}>
                            <Link
                                to={`acts/${cast.id}`}
                                className="text-center min-w-[160px] cursor-pointer group"
                            >
                                <img
                                    src={cast.primaryImage}
                                    alt={cast.fullName}
                                    className="w-40 h-40 object-cover rounded-full transition-all duration-30 ease-in group-hover:opacity-70"
                                />
                                <h2 className='mt-2 font-bold'>{cast.fullName}</h2>
                                <div className="mt-3 text-lg flex flex-col font-semibold">
                                    <span className="text-red-500">{cast.characters}</span>
                                    <span className="text-white-500">{cast.job}</span>
                                </div>
                            </Link>
                        </SwiperSlide>
                    ))
                ) : (
                    <h2>Malumotlar kelmadi</h2>
                )}
            </Swiper>


        </div>
    )
}

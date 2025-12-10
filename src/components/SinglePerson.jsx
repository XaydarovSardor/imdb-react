import { useEffect, useState } from "react"
import { Link, useNavigate, useParams } from "react-router-dom"
import { getSingleCast, getSingleMovie } from "../api"
import { Title } from "./Title"

export const SinglePerson = () => {
    const { id } = useParams()
    const navigate = useNavigate()
    const [cast, setCast] = useState()
    const [loading, setLoading] = useState(true)
    const [knownFor, setKnownFor] = useState([])
    useEffect(() => {
        const singleCastFunc = async () => {
            try {
                const request = await getSingleCast(id)
                setCast(request)
                setLoading(false)
            } catch (error) {
                console.log(error);
            }
        }
        singleCastFunc()
    }, [id])
    useEffect(() => {
        if (!cast?.knownForTitles) return;
        const knownForFetch = async () => {
            try {
                const promises = cast.knownForTitles.map(id => getSingleMovie(id))
                const results = await Promise.all(promises)
                setKnownFor(results)
            } catch (error) {
                console.log(error);
            }
        }
        knownForFetch()
    }, [cast])
    const backBtn = () => {
        navigate(-1)
    }
    return (
        <>
            <div className="bg-[#121212] text-white">
                {loading && <h2 className="text-red-400 font-semibold">Loading...</h2>}
                <div className="max-w-7xl mx-auto px-6 py-10">
                    <button onClick={backBtn} className="px-8 py-2 mb-3 bg-yellow rounded-lg">Back</button>

                    <div className="flex flex-col gap-1">
                        <h1 className="text-4xl font-semibold">{cast?.name}</h1>
                        <div className="text-gray-400 text-sm">{cast?.birthName}</div>
                    </div>
                    <div className="grid grid-cols-12 gap-2 mt-10">

                        <div className="col-span-3 h-[300px]">
                            <div className="relative h-full">
                                <img
                                    src={cast?.primaryImage}
                                    className="rounded-xl h-full w-full shadow-lg"
                                />
                                <button className="absolute top-2 right-2 w-8 h-8 rounded-full bg-black/60 flex items-center justify-center border border-gray-600">
                                    +
                                </button>
                            </div>
                        </div>

                        <div className="col-span-6 h-[300px]">
                            <div className="rounded-xl relative overflow-hidden border border-gray-700">
                                <div className="rounded-xl overflow-hidden border border-gray-700 h-[300px]">
                                    <img className="w-full h-full" src={cast?.thumbnails?.[1]?.url} alt="thumbnail" />
                                </div>

                                <button className="absolute bottom-4 left-6 bg-black/60 px-4 py-2 rounded-full flex items-center gap-2">
                                    <svg className="w-5 h-5 text-white" viewBox="0 0 24 24" fill="currentColor">
                                        <path d="M5 3v18l15-9L5 3z" />
                                    </svg>
                                    Play trailer 1:01
                                </button>
                            </div>
                        </div>

                        <div className="col-span-3 flex flex-col gap-4 h-[300px]">
                            <Link className="h-36 bg-[#423D3C] rounded-xl flex items-center justify-center">
                                <div className="text-center">
                                    <svg className="w-8 h-8 mx-auto mb-2" fill="currentColor" viewBox="0 0 24 24">
                                        <path d="M5 3v18l15-9L5 3z" />
                                    </svg>
                                    19 VIDEOS
                                </div>
                            </Link>

                            <Link className="h-36 bg-[#423D3C] rounded-xl flex items-center justify-center">
                                <div className="text-center">
                                    <svg className="w-8 h-8 mx-auto mb-2" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
                                        <path d="M3 5h18v14H3z" />
                                    </svg>
                                    99+ PHOTOS
                                </div>
                            </Link>
                        </div>

                    </div>
                    {cast?.biography && (
                        <div className="mt-3 font-semibold flex items-center gap-2">
                            {cast.biography.length > 900 ? (
                                <span className="flex flex-col">{cast.biography.slice(0, 900)}...
                                </span>
                            ) : (
                                <span>{cast.biography}</span>
                            )}
                        </div>
                    )}

                </div>
            </div>

            <div className="bg-white text-[#000] py-10">
                <div className="container">
                    <h2 className="text-black text-2xl font-semibold mb-3">Professions</h2>
                    <div className="flex gap-3 mb-5">
                        {cast?.primaryProfessions ? (
                            cast.primaryProfessions.map((prof, index) => (
                                <span className="text-yellow bg-black p-3 rounded-xl" key={index + 1}>{prof}</span>
                            ))
                        ) : (
                            <span>Not found</span>
                        )}
                    </div>
                    <Title title={"Personal details"} />
                    {cast?.name&&(<h2 className="my-5 py-3 font-semibold text-black text-lg border-y border-solid border-gray-300">Name <span className="text-blue-500 ">{cast?.name}</span></h2>)}
                    {cast?.height&&(<h2 className="my-5 py-3 font-semibold text-black text-lg border-y border-solid border-gray-300">Height <span className="text-blue-500 ">{cast?.height}</span></h2>)}
                    {cast?.birthDate&&(<h2 className="my-5 py-3 font-semibold text-black text-lg border-y border-solid border-gray-300">BirthDate <span className="text-blue-500 ">{cast?.birthDate}</span></h2>)}
                    {cast?.BirthLocation&&(<h2 className="my-5 py-3 font-semibold text-black text-lg border-y border-solid border-gray-300">BirthLocation <span className="text-blue-500 ">{cast?.birthLocation}</span></h2>)}
                    <Title title={"Known for"} color={"black"} href={""} />
                    {knownFor.length > 0 ? (
                        <div className="grid my-5 grid-cols-4 gap-4">
                            {knownFor.map(movie => (
                                <Link to={`/${movie.id}`} key={movie.id} className="bg-white shadow p-3 rounded-xl">
                                    <img
                                        src={movie?.primaryImage}
                                        className="w-full h-60 rounded-lg"
                                    />
                                    <h3 className="mt-2 font-semibold">{movie.primaryTitle}</h3>
                                    <div className="flex flex-col gap-1">
                                        <span className="bg-yellow-400 text-gray-400 font-semibold rounded-md text-sm flex items-center">
                                            <svg className="w-4 text-yellow h-4" viewBox="0 0 24 24" fill="none">
                                                <path d="M12 .587l3.668 7.431 8.2 1.192-5.934 5.786 1.4 8.168L12 18.896 4.666 23.164l1.4-8.168L.132 9.21l8.2-1.192L12 .587z" fill="currentColor" />
                                            </svg>
                                            {movie.averageRating}/10
                                        </span>
                                        <span className="text-gray-400 text-semibold">{movie.releaseDate}</span>
                                    </div>
                                </Link>
                            ))}
                        </div>
                    ) : <h2>Known for movies not found</h2>}


                </div>
            </div>
        </>
    )
}

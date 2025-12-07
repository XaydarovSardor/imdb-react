import { useEffect, useState } from "react"
import { Link, useNavigate, useParams } from "react-router-dom"
import { getSingleCast } from "../api"

export const SinglePerson = () => {
    const { id } = useParams()
    const navigate = useNavigate()
    const [cast, setCast] = useState()
    const [loading, setLoading] = useState(true)
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
    const backBtn = () => {
        navigate(-1)
    }
    return (
        <div className="bg-[#121212] text-white">
            {loading && <h2 className="text-red-400 font-semibold">Loading...</h2>}
            <div className="max-w-7xl mx-auto px-6 py-10">
                <button onClick={backBtn} className="px-8 py-2 mb-3 bg-yellow rounded-lg">Back</button>

                <div className="flex items-center justify-between">
                    <div className="flex flex-col gap-1">
                        <h1 className="text-4xl font-semibold">{cast?.name}</h1>
                        <div className="text-gray-400 text-sm">{cast?.birthName}</div>
                    </div>
                    <h3 className="text-gray-500 text-sm font-semibold uppercase">Professions</h3>
                    <div className="flex gap-2 gap-2 justify-center">
                        {cast?.primaryProfessions.map((prof,index) => (
                            <span key={index} className="bg-yellow-400 text-gray-400 font-semibold rounded-md text-sm flex items-center">{prof}</span>
                        ))}
                    </div>
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
                {cast?.biography && (<p className="mt-6 text-lg text-gray-300 max-w-4xl leading-relaxed">{cast?.biography}</p>)}
            </div>
        </div>
    )
}

import { Link, useNavigate, useParams } from "react-router-dom"
import { getLikeThis, getSingleMovie } from "../api";
import { useEffect, useState } from "react";
import { Title } from "./Title";
import { User } from "lucide-react";

export const SingleMovie = () => {
    const [movie, setMovie] = useState()
    const [moreLikeThisMovie, setMoreLikeThisMovie] = useState([])
    const { id } = useParams()
    const navigation = useNavigate()
    useEffect(() => {
        const getSingleMov = async () => {
            try {
                const res = await getSingleMovie(id)
                const likeThisFetch = await getLikeThis(id)
                setMoreLikeThisMovie(likeThisFetch)
                setMovie(res)
            } catch (error) {
                console.log(error);
            }
        }
        getSingleMov()
    }, [id])

    if (!movie) {
        return <h2>Malumotlar topilmadi</h2>
    }
    const backBtn = () => {
        navigation(-1)
    }
    const formatVotes = (num) => {
        if (num >= 1_000_000) {
            return (num / 1_000_000).toFixed(1).replace(".0", "") + " mln"
        } else if (num >= 1000) {
            return Math.floor(num / 1000) + "k"
        } else {
            return num
        }
    }

    return (
        <div className="bg-white">
            <div className="bg-[#121212] text-white">

                <div className="max-w-7xl mx-auto px-6 py-10">
                    <button onClick={backBtn} className="px-8 py-2 mb-3 bg-yellow rounded-lg">Back</button>

                    <div className="flex items-center justify-between">
                        <div className="flex flex-col gap-1">
                            <h1 className="text-4xl font-semibold">{movie.primaryTitle}</h1>
                            <div className="text-gray-400 text-sm">{movie.releaseDate} • {movie.runtimeMinutes} minutes</div>
                        </div>
                        <div className="flex flex-col gap-2 justify-center">
                            <h3 className="text-gray-500 text-sm font-semibold uppercase">Imdb rating</h3>
                            <span className="bg-yellow-400 text-gray-400 font-semibold rounded-md text-sm flex items-center">
                                <svg className="w-4 text-yellow h-4 mr-1" viewBox="0 0 24 24" fill="none">
                                    <path d="M12 .587l3.668 7.431 8.2 1.192-5.934 5.786 1.4 8.168L12 18.896 4.666 23.164l1.4-8.168L.132 9.21l8.2-1.192L12 .587z" fill="currentColor" />
                                </svg>
                                {movie.averageRating}/10
                            </span>
                            <span className="text-gray-400 font-semibold text-sm">{movie.numVotes} votes</span>
                        </div>
                    </div>

                    <div className="grid grid-cols-12 gap-2 mt-10">

                        <div className="col-span-3 h-[400px]">
                            <div className="relative h-full">
                                <img
                                    src={movie.primaryImage}
                                    className="rounded-xl h-full w-full shadow-lg"
                                />
                                <button className="absolute top-2 right-2 w-8 h-8 rounded-full bg-black/60 flex items-center justify-center border border-gray-600">
                                    +
                                </button>
                            </div>
                        </div>

                        <div className="col-span-6 h-[400px]">
                            <div className="rounded-xl relative h-full overflow-hidden border border-gray-700">
                                <div className="rounded-xl overflow-hidden border border-gray-700 h-full">
                                    <img className="w-full h-full" src={movie.thumbnails[1].url} alt="thumbnail" />
                                </div>

                                <button className="absolute bottom-4 left-6 bg-black/60 px-4 py-2 rounded-full flex items-center gap-2">
                                    <svg className="w-5 h-5 text-white" viewBox="0 0 24 24" fill="currentColor">
                                        <path d="M5 3v18l15-9L5 3z" />
                                    </svg>
                                    Play trailer 1:01
                                </button>
                            </div>
                        </div>

                        <div className="col-span-3 justify-between flex flex-col gap-4 h-[400px]">
                            <Link className="h-[200px] bg-[#423D3C] rounded-xl flex items-center justify-center">
                                <div className="text-center">
                                    <svg className="w-8 h-8 mx-auto mb-2" fill="currentColor" viewBox="0 0 24 24">
                                        <path d="M5 3v18l15-9L5 3z" />
                                    </svg>
                                    19 VIDEOS
                                </div>
                            </Link>


                            <Link className="h-[200px] bg-[#423D3C] rounded-xl flex items-center justify-center">
                                <div className="text-center">
                                    <svg className="w-8 h-8 mx-auto mb-2" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
                                        <path d="M3 5h18v14H3z" />
                                    </svg>
                                    99+ PHOTOS
                                </div>
                            </Link>
                        </div>

                    </div>

                    <div className="flex flex-wrap gap-3 mt-8">
                        {movie.genres && (movie.genres.map((genre, index) => (
                            <span
                                key={index}
                                className="bg-transparent border border-solid border-white rounded-full px-4 py-1 text-sm cursor-pointer hover:bg-gray-700"
                            >
                                {genre}
                            </span>
                        )))}
                    </div>


                    {movie.description && (<p className="mt-6 text-lg text-gray-300 max-w-4xl leading-relaxed">{movie.description}</p>)}
                    <div className="mt-8 space-y-4">
                        <div>
                            <h3 className="text-gray-400 text-lg">Directors</h3>
                            <div className="flex gap-3 mt-1 flex-wrap">
                                {movie.directors && (movie.directors.map(director => (
                                    <div key={director.id} className="flex gap-3 mt-1">
                                        <Link to={`/director/${director.id}`} className="text-blue-400 hover:underline">{director.fullName}</Link>
                                    </div>
                                )))}
                            </div>
                        </div>

                        <div>
                            <h3 className="text-gray-400 text-lg">Writers</h3>
                            <div className="flex gap-3 mt-1 flex-wrap">
                                {movie.writers && (movie.writers.map(writer => (
                                    <div key={writer.id} className="flex gap-3 mt-1">
                                        <Link to={`/writer/${writer.id}`} className="text-blue-400 hover:underline">{writer.fullName}</Link>
                                    </div>
                                )))}
                            </div>
                        </div>

                        <div>
                            <h3 className="text-gray-400 text-lg">Stars</h3>
                            <div className="flex gap-3 mt-1 flex-wrap">
                                {movie.cast && (movie.cast.slice(0, 3).map(star => (
                                    <div key={star.id} className="flex gap-3 mt-1">
                                        <Link className="text-blue-400 hover:underline">{star.fullName}</Link>
                                    </div>
                                )))}
                            </div>
                        </div>
                    </div>



                </div>
            </div>
            <div className="bg-white my-10">
                <div className="container">
                    <div className="flex items-center gap-1">
                        <Title title={"Top Cast"} color={"black"} />
                        <span className="text-gray-600 text-sm font-semibold">{movie.cast.length}</span>
                    </div>
                    <div className="grid my-5 grid-cols-1 md:grid-cols-3 gap-y-6 gap-x-8 items-start">
                        {movie.cast.map((c, idx) => (
                            <Link key={idx} to={`/acts/${c.id}`} className="flex items-center">
                                <div className="flex-shrink-0">
                                    {c.primaryImage ? (
                                        <img
                                            src={c.primaryImage}
                                            alt={`${c.fullName} portrait`}
                                            className="w-16 h-16 md:w-20 md:h-20 rounded-full object-cover ring-2 ring-transparent"
                                        />
                                    ) : <User className="w-16 h-16 md:w-20 md:h-20 rounded-full object-cover ring-2 ring-transparent" />}
                                </div>

                                <div className="ml-4">
                                    <div className="flex flex-col items-baseline space-x-3">
                                        <h3 className="text-sm md:text-base font-semibold text-gray-900">
                                            {c.fullName}
                                        </h3>
                                        <span className="text-xs md:text-sm text-gray-500">{c.characters}</span>
                                    </div>

                                    <div className="mt-1 flex items-center space-x-3">
                                        <a
                                            href={c.episodesLink || "#"}
                                            className="text-sm md:text-sm text-blue-600 hover:underline"
                                        >
                                            {c.episodes}
                                        </a>

                                        <span className="text-sm md:text-sm text-gray-400">{c.job}</span>
                                    </div>
                                </div>
                            </Link>
                        ))}
                    </div>
                    <Title title={"User reviews"} color={"black"} href={"/"} />
                    <div className="flex items-center my-5 gap-3">
                        <span className="bg-yellow-400 text-black font-semibold rounded-md text-5xl flex items-center">
                            <svg className="w-14 text-yellow h-8" viewBox="0 0 24 24" fill="none">
                                <path className="w-14 text-yellow h-8" d="M12 .587l3.668 7.431 8.2 1.192-5.934 5.786 1.4 8.168L12 18.896 4.666 23.164l1.4-8.168L.132 9.21l8.2-1.192L12 .587z" fill="currentColor" />
                            </svg>
                            {movie.averageRating}
                        </span>
                        <span className="text-gray-600 font-semibold text-xl">{formatVotes(movie.numVotes)} votes</span>
                    </div>
                    <h2 className="text-black text-2xl font-semibold my-1">Summary</h2>
                    <p className="text-gray-600 mb-5 font-semibold">{movie.description}</p>
                    <Title title={"More like this"} color={"black"} href={"/"} />
                    {moreLikeThisMovie.length > 8 ? (
                        <div className="grid my-3 grid-cols-4 gap-4">
                            {moreLikeThisMovie.slice(0, 8).map(movie => (
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
                    ) : <h2>More like this movies not found</h2>}


                </div>
            </div>
        </div>

    )
}

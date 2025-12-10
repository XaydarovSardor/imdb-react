import { Eye, Info, Star } from 'lucide-react'
import { useEffect, useState } from 'react'
import { getAllMovies } from '../api'
import { Link } from 'react-router-dom'
export const Top250Movies = () => {
    const [movies, setMovies] = useState([])
    useEffect(() => {
        const getMovies = async () => {
            try {
                const res = await getAllMovies()
                setMovies(res)
                console.log(res);
            } catch (error) {
                console.log(error);

            }
        }
        getMovies()
    }, [])
    return (
        <div className="mt-10">
            <div className="container bg-white flex flex-col p-5 gap-5">
                <h2 className="text-sm font-semibold text-gray-500">IMDb CHARTS</h2>
                <h1 className="text-3xl font-bold my-2">IMDb Top 250 movies</h1>
                <p className="text-gray-400 mb-4">As rated by regular IMDb voters.</p>
                <div className="w-full bg-gray-200 h-2 rounded-full mb-4">
                    <div
                        className="bg-gray-200 h-2 rounded-full"
                        style={{ width: "100%" }}
                    >
                    </div>
                </div>
                <div className="flex justify-between">
                    <h3 className='font-semibold text-sm'>0 OF 250 WATCHED</h3>
                    <span className='font-semibold text-sm'>0%</span>
                </div>
                <h3>250 Titles</h3>

                {/* card section */}
                {movies && movies.length > 0 ? movies.map((movie, index) => (
                    <Link to={`/${movie.id}`} key={movie.id} className='flex bg-[#FAFAFA] rounded-lg overflow-hidden flex-col'>

                        <div className="space-y-4">
                            <div className="flex items-center gap-4 bg-gray-50 p-4 rounded-lg shadow-sm">
                                <div className="relative w-16 h-24 flex-shrink-0">
                                    <img
                                        src={movie.primaryImage}
                                        alt={movie.primaryTitle}
                                        className="w-full h-full object-cover rounded"
                                    />
                                    <span className="absolute top-0 left-0 bg-blue-600 text-white text-xs font-bold px-1 rounded-br">
                                        # {index + 1}
                                    </span>
                                    <button className="absolute top-1 right-1 text-white bg-black/50 p-1 rounded-full text-sm">
                                        +
                                    </button>
                                </div>

                                <div className="flex-1">
                                    <h3 className="font-semibold">{movie.primaryTitle}</h3>
                                    <p className="text-gray-500 text-sm">
                                        {movie.releaseDate} • {movie.runtimeMinutes}minutes •
                                    </p>

                                    <div className="flex items-center gap-4 mt-2 text-sm text-gray-600">
                                        <span className="flex items-center gap-1">
                                            <Star className="w-4 h-4 text-yellow" />
                                            {movie.averageRating}
                                        </span>
                                        <button className="flex items-center gap-1 hover:text-blue-500">
                                            <Star className="w-4 h-4" /> Rate
                                        </button>
                                        <button
                                            className="flex items-center gap-1 hover:text-blue-500"
                                        >
                                            <Eye className="w-4 h-4" /> Mark as watched
                                        </button>
                                    </div>
                                </div>

                                <div className="ml-auto">
                                    <button className="p-2 hover:bg-gray-200 rounded-full">
                                        <Info className="w-5 h-5" />
                                    </button>
                                </div>
                            </div>
                        </div>
                    </Link>
                )) : <h2>Moviest not found</h2>}
            </div>
        </div>
    )
}

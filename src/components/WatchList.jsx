import { Title } from "./Title"

export const WatchList = () => {
    return (
        <div className="container text-white py-16">

            <Title title={"From your Watchlist"} color={"white"}/>

            <div className="flex flex-col items-center text-center mt-20 mb-10">

                <div className="w-12 h-12 bg-[#1a1a1a] flex items-center justify-center rounded mb-6">
                    <span className="text-3xl leading-none">+</span>
                </div>

                <h3 className="text-xl font-bold mb-1">Sign in to access your Watchlist</h3>
                <p className="text-gray-300 mb-8">
                    Save shows and movies to keep track of what you want to watch.
                </p>

                <button className="bg-gray-800 hover:bg-gray-700 px-6 py-3 rounded-full text-blue-400 font-semibold transition-all duration-300">
                    Sign in to IMDb
                </button>

            </div>

        </div>
    )
}

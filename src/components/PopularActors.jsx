import { images } from '../assets/images'
import { Title } from './Title'

export const PopularActors = () => {
    return (
        <div className="text-white py-10 container">

            <Title title={"Most popular celebrities"} color={"white"}/>
            <h3 className="mb-3 uppercase text-yellow mt-3 font-semibold text-xs">Top rising</h3>

            <div className="relative">
                <button className="hidden md:flex absolute left-0 top-1/2 -translate-y-1/2 bg-gray-800/70 hover:bg-gray-800 p-3 rounded-full">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="white" className="w-6 h-6">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7" />
                    </svg>
                </button>

                <div className="flex gap-10 overflow-x-auto scrollbar-hide px-4">

                    <div className="text-center min-w-[160px] cursor-pointer group"
                    >
                        <img
                            src={images.actor1}
                            alt="Bryan Cranston"
                            className="w-40 h-40 object-cover rounded-full transition-all duration-30 ease-in group-hover:opacity-70 group-focus:opacity-70"
                        />
                        <div className="mt-3 text-lg font-semibold">
                            29 <span className="text-red-500">(▼11)</span>
                        </div>
                        <div className="text-sm text-gray-300">Bryan Cranston</div>
                    </div>

                    <div className="text-center min-w-[160px] cursor-pointer group">
                        <img src={images.actor2} className="w-40 h-40 object-cover rounded-full transition-all duration-30 ease-in group-hover:opacity-70 group-focus:opacity-70" />
                        <div className="mt-3 text-lg font-semibold">30 <span className="text-green-500">(▲120)</span></div>
                        <div className="text-sm text-gray-300">Aaron Paul</div>
                    </div>

                    <div className="text-center min-w-[160px] cursor-pointer group">
                        <img src={images.actor3} className="w-40 h-40 object-cover rounded-full transition-all duration-30 ease-in group-hover:opacity-70 group-focus:opacity-70" />
                        <div className="mt-3 text-lg font-semibold">31 <span className="text-green-500">(▲48)</span></div>
                        <div className="text-sm text-gray-300">Giancarlo Espocito</div>
                    </div>

                    <div className="text-center min-w-[160px] cursor-pointer group">
                        <img src={images.actor4} className="w-40 h-40 object-cover rounded-full transition-all duration-30 ease-in group-hover:opacity-70 group-focus:opacity-70" />
                        <div className="mt-3 text-lg font-semibold">32 <span className="text-green-500">(▲17)</span></div>
                        <div className="text-sm text-gray-300">Bob Odenkirk</div>
                    </div>

                    <div className="text-center min-w-[160px] cursor-pointer group">
                        <img src={images.actor5} className="w-40 h-40 object-cover rounded-full transition-all duration-30 ease-in group-hover:opacity-70 group-focus:opacity-70" />
                        <div className="mt-3 text-lg font-semibold">33 <span className="text-red-500">(▼6)</span></div>
                        <div className="text-sm text-gray-300">Clara Stack</div>
                    </div>

                    <div className="text-center min-w-[160px] cursor-pointer group">
                        <img src={images.actor6} className="w-40 h-40 object-cover rounded-full transition-all duration-30 ease-in group-hover:opacity-70 group-focus:opacity-70" />
                        <div className="mt-3 text-lg font-semibold">34 <span className="text-green-500">(▲484)</span></div>
                        <div className="text-sm text-gray-300">Caleb McLaughlin</div>
                    </div>

                </div>

                <button className="hidden md:flex absolute right-0 top-1/2 -translate-y-1/2 bg-gray-800/70 hover:bg-gray-800 p-3 rounded-full">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="white" className="w-6 h-6">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                    </svg>
                </button>

            </div>

        </div>
    )
}

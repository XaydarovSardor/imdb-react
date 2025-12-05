import { Title } from "./Title";

export const Genres = () => {
    const genres = [
        {
            title: "Drama",
            image:
                "https://images.unsplash.com/photo-1524253482453-3fed8d2fe12b?auto=format&fit=crop&w=900&q=60",
        },
        {
            title: "Horror",
            image:
                "https://www.shutterstock.com/image-vector/horror-dripping-blood-text-vector-260nw-2687213149.jpg",
        },
        {
            title: "Thriller",
            image:
                "https://images.unsplash.com/photo-1499557354967-2b2d8910bcca?auto=format&fit=crop&w=900&q=60",
        },
        {
            title: "Comedy",
            image:
                "https://images.unsplash.com/photo-1521590832167-7bcbfaa6381f?auto=format&fit=crop&w=900&q=60",
        },
    ];

    return (
        <>
            <div className="container">
                <Title title={"Popular interests"}/>
                <div className="flex justify-between mt-3">
                    {genres.map((genre, index) => (
                        <div
                            key={index} className="relative w-64 h-40 rounded-xl overflow-hidden max-w-72 w-full bg-gray-900 flex-shrink-0">
                            <img src={genre.image} alt={genre.title} className="w-full h-full object-cover" />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                            <button
                                className="absolute bottom-3 right-3 w-9 h-9 rounded-full bg-black/100 hover:bg-black/50 transition-all ease-in delay-20 backdrop-blur-sm flex items-center justify-center">
                                <svg className="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24">
                                    <path
                                        d="M12 5v14M5 12h14"
                                        stroke="currentColor"
                                        strokeWidth="2"
                                        strokeLinecap="round"
                                    />
                                </svg>
                            </button>

                            <div className="absolute bottom-3 left-4 text-white text-lg font-medium">
                                {genre.title}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </>
    );
}


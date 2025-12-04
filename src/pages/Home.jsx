import { images } from "../assets/images"
import { Genres, Picks, PopularActors, PrimeVideo, WatchList } from "../components"
import "./home.css"
export const Home = () => {
  return (
    <>
      {/* popular actors */}
      <PopularActors />
      {/* popular actors end */}
      {/* Picks sectiom */}
      <Picks />
      {/* Picks end */}

      {/* watchlist */}
      <WatchList />
      {/* watchlist end */}

      {/* Genres */}
      <Genres />
      {/* Genres end */}

      {/* Prime video */}
      <PrimeVideo />
      {/* Prime video end */}
    </>

  )
}

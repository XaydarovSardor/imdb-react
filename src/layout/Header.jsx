import { Link, Links } from "react-router-dom"
import { icons } from "../assets"
import { Search } from "../components"
import "./header.css"
import { ChevronDown, ChevronRight, X } from "lucide-react"
import { useState } from "react"
export const Header = () => {
  const [openModal, setOpenModal] = useState(false)
  return (
    <>
      <header className="bg-black p-3">
        <div className="container gap-4 flex items-center">
          <div className="flex header-left relative items-center gap-4 ">
            <Link className="w-16 h-8 flex" to={"/"}>
              <img src={icons.imdbLogo} alt="main-logo" />
            </Link>
            <button onClick={() => setOpenModal(true)} className='flex font-semibold items-center gap-2 text-white text-sm hover:bg-[#252525] px-4 rounded-2xl transition-all ease-in delay-30 '>
              <span className='text-2xl'><i className="fa-solid fa-bars text-2xl w-6 text-white"></i></span>
              Menu
            </button>
            <Search />
            <Link className="text-white font-semibold text-md">IMDb<span className="text-blue-400">Pro</span></Link>
          </div>
          <div className="header-right flex">
            <button>Watchlist</button>
            <button>Sign in</button>
            <button className="flex items-center">EN
              <ChevronDown className="w-[20px] h-[10px]"/>
            </button>
          </div>
        </div>
      </header>

      {/* menu modal */}
      {openModal && (
        <div className="fixed inset-0 bg-black/90 z-50 flex justify-center items-start pt-20" onClick={() => setOpenModal(false)}>
          <div className="relative w-full max-w-sm bg-black text-white rounded-xl p-6" onClick={(e) => e.stopPropagation()}>

            <button onClick={() => setOpenModal(false)} className="absolute bg-yellow top-[30px] right-4 w-10 h-10 flex items-center justify-center rounded-full bg-yellow-400 text-black font-bold text-xl"
            >
              <X />
            </button>

            <div className="mb-8 flex justify-between">
              <img
                src={icons.imdbLogo}
                alt="IMDb Logo"
                className="h-12"
              />
            </div>

            <ul className="space-y-4">
              <li>
                <Link to={"/top250Movies"} onClick={() => setOpenModal(false)}
                  className="text-lg font-semibold hover:text-yellow-400 transition-colors hover:underline"
                >
                  Top 250 movies
                </Link>
              </li>
            </ul>
          </div>
        </div>
      )}
    </>
  )
}

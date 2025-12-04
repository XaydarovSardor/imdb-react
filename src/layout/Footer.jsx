import { images } from "../assets"

export const Footer = () => {
  return (
    <footer className="text-white py-8">
      <div className="container">
        <div className="flex w-full justify-center mb-5">
          <button className="w-fit bg-yellow text-black/100 font-semibold py-2 px-6 rounded-full">
            Sign in for more access
          </button>
        </div>
        <div className="max-w-6xl mx-auto flex justify-center items-center gap-6">
          <div className="flex max-w-96 w-full items-center gap-4 flex-col p-5 border-2 border-solid border-[#1F1F1F] rounded-xl">
            <span className="font-bold">Follow IMDb on social</span>
            <div className="flex gap-3 text-2xl">
              <i className="fab fa-tiktok cursor-pointer"></i>
              <i className="fab fa-instagram cursor-pointer"></i>
              <i className="fab fa-x cursor-pointer"></i>
              <i className="fab fa-youtube cursor-pointer"></i>
              <i className="fab fa-facebook cursor-pointer"></i>
            </div>
          </div>
          <div className="flex items-center max-w-96 w-full p-5 border-2 border-solid border-[#1F1F1F] justify-between rounded-xl">
            <div className="flex items-center flex-col">
              <span className="font-bold">Get the IMDb App</span>
              <span className="text-gray-400">For Android and iOS</span>
            </div>
            <img className="w-16 h-16" src={images.qrcode} alt="qrcode" />
          </div>
        </div>

        <div className="mt-8 pt-4 text-sm text-gray-400 flex flex-wrap justify-center gap-4">
          <a href="#">Help</a>
          
          <a href="#">Site Index</a>
          <a href="#">IMDbPro</a>
          <a href="#">Box Office Mojo</a>
          <a href="#">License IMDb Data</a>
          <a href="#">Press Room</a>
          <a href="#">Advertising</a>
          <a href="#">Jobs</a>
          <a href="#">Conditions of Use</a>
          <a href="#">Privacy Policy</a>
          <a href="#">Your Ads Privacy Choices</a>
        </div>

        <div className="mt-4 text-center text-gray-500">
          an <span className="font-bold">amazon</span> company
          <br />
          © 1990-2025 by IMDb.com, Inc.
        </div>
      </div>


    </footer>

  )
}

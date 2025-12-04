export const Search = () => {
  return (
    <div className="flex w-[722px] relative overflow-hidden rounded-lg">
      <div className="relative rounded-l-lg w-fit rounded-none w-64">
        <div className="bg-white select-none
         border hover:bg-[#EDEDED] ease-in transition-all delay-30 border-gray-300 px-4 py-1 flex justify-between items-center gap-2 cursor-pointer">
          <span className="text-gray-700">All</span>
          <svg
            className="w-4 h-4 text-gray-500"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
          </svg>
        </div>

        {/* <div className="absolute mt-1 w-full bg-white border border-gray-300 rounded shadow-lg">
              <div className="px-4 py-2 text-gray-700 hover:bg-blue-100 cursor-pointer">
                Option 1
              </div>
              <div className="px-4 py-2 text-gray-700 hover:bg-blue-100 cursor-pointer">
                Option 2
              </div>
              <div className="px-4 py-2 text-gray-700 hover:bg-blue-100 cursor-pointer">
                Option 3
              </div>
            </div> */}
      </div>
      <input
        type="search"
        className="w-full px-4 py-1 text-black focus:outline-none focus:ring-1 focus:ring-yellow transition-all duration-300"
      />

    </div>
  )
}

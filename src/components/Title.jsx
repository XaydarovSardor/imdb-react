import { ChevronRight } from "lucide-react"

export const Title = ({ title, subtitle, color }) => {
  return (
    <>
      <a href="#" className={`flex inline-flex items-center text-${color} relative gap-2 hover:text-yellow transition-all ease-in delay-30`}>
        <span className="yellow-title"></span>
        <p className="text-2xl font-bold">{title}</p>
        <ChevronRight />
      </a>
      {subtitle && <p className="text-gray-400 font-semibold text-sm my-3">{subtitle}</p>}
    </>
  )
}

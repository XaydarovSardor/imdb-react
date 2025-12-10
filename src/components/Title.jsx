import { ChevronRight } from "lucide-react"
import { Link } from "react-router-dom"

export const Title = ({ title, subtitle, color, href }) => {
  return (
    <>
      <Link to={`/${href}`} className={`flex inline-flex items-center text-${color} relative gap-2 hover:text-yellow transition-all ease-in delay-30`}>
        <span className="yellow-title"></span>
        <p className="text-2xl font-bold">{title}</p>
        <ChevronRight />
      </Link>
      {subtitle && <p className="text-gray-400 font-semibold text-sm my-3">{subtitle}</p>}
    </>
  )
}

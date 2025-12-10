import { useEffect, useState } from "react"
import { getAllMovies } from "../api"

export const AllPicks = () => {
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
        <div>AllPicks</div>
    )
}

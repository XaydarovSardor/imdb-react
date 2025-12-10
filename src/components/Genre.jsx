import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { getSingleGenre } from "../api"

export const Genre = () => {
    const {id} = useParams()
    const [genre, setGenre] = useState()
    useEffect(()=>{
        const getGenreFetch = async ()=>{
            try {
                const res = getSingleGenre(id)
                setGenre(res)
            } catch (error) {
                console.log(error);
            }
        }
    },[id])
    console.log(genre);
    return (
        <div>Genre</div>
    )
}
